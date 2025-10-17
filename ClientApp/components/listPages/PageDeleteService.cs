using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using reactBase;
using restUpdate;
using RevStorage;
using Utilities;


namespace components.listPages
{
    public interface IPageDeleteService
    {

        Task SetPagesForDeletionAsync(commonInterfaces.IRevDatabase revDb, PageImageModel[] pages, DateTime? deleteAfter = null, string? user = null,
            string? docId = null);

        Task deleteOrphanedPages(commonInterfaces.IRevDatabase revDb, IRevStorageService storage);
    }

    public class PageDeleteService : IPageDeleteService
    {

        private readonly ILogger _logger;
        readonly IDistributedCache _distributedCache;

        public PageDeleteService(
            ILogger<PageDeleteService> logger,
            IDistributedCache distributedCache
            )
        {
            _logger = logger;

            _distributedCache = distributedCache;
        }

        public async Task SetPagesForDeletionAsync(commonInterfaces.IRevDatabase revDb, PageImageModel[] pages, DateTime? deleteAfter = null,
            string? user = null, string? docId = null)
        {

            var done = await Task.WhenAll(pages.Select(async page =>
            {
                return await revDb.AddorUpdateAsync(
                    new PageToDelete { pageId = page.id, originalUploadedId = page.originalId, deleteAfter = deleteAfter, user = user, docId = docId },
                    Guid.NewGuid().ToString());
            }));


            /*
			foreach (var page in pages)
			{
				await revDb.AddorUpdateAsync(new PageToDelete { pageId = page.id, deleteAfter = deleteAfter }, Guid.NewGuid().ToString());
			}
			*/
        }

        /// <summary>
        ///
        /// </summary>
        public async Task deleteOrphanedPages(commonInterfaces.IRevDatabase revDb, IRevStorageService storage)
        {
            _logger.LogDebug("deleteOrphanedPages started");

            //This is to be called in loop, so just do a good chunk and then go back to loop
            var toDeleteListQ = revDb.getQueryable<PageToDelete>()
                .Where(p => null == p.deleteAfter || DateTime.Now > p.deleteAfter)
                .Take(50);
            var toDeleteList = toDeleteListQ.ToArray();

            while (toDeleteList.Count() > 0)
            {
                _logger.LogDebug($"deleteOrphanedPages count:{toDeleteList.Count()}");

                //we are doing random so that other threads can help out and hopefully pick different docs to process
                var r = new Random();
                var selectedPage = toDeleteList.ElementAt(r.Next(0, toDeleteList.Count()));

                var lockKey = $"deletingpage:{selectedPage.id}";

                try
                {
                    if (null == await _distributedCache.GetStringAsync(lockKey))
                    {
                        _logger.LogDebug($"deleteOrphanedPages pageId:{selectedPage.pageId} checking");
                        await _distributedCache.SetStringAsync(lockKey, "true", new DistributedCacheEntryOptions
                        {
                            //if we have failed to delete in 10 min, then we will try deleting this again
                            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
                        });

                        var toDelete = new List<string>(new[] { selectedPage.pageId });

                        if (null != selectedPage.originalUploadedId)
                            toDelete.Add(selectedPage.originalUploadedId);

                        foreach (var toDeleteId in toDelete)
                        {
                            var existsQ = revDb.getQueryable<PageHolderModel>()
                                .Where(ph => null != ph.pages && ph.pages.Any(p => p.id == toDeleteId || p.originalId == toDeleteId));

                            var exists = null != existsQ.FirstOrDefault();
                            _logger.LogDebug($"deleteOrphanedPages pageId:{toDeleteId} exists:{exists}");

                            if (exists)
                                break;


                            //we don' care if we delete from storage and the orphan remains.
                            try
                            {
                                await storage.DeleteAsync(toDeleteId);
                            }
                            catch (Exception ex)
                            {
                                _logger.LogWarning(ex, $"deleteOrphanedPages pageId:{toDeleteId} failed to delete from storage");
                            }


                        }

                        _logger.LogInformation($"deleteOrphanedPages pageId:{selectedPage.pageId} removing from delete pages list");
                        await revDb.DeleteAsync<PageToDelete>(new[] { selectedPage.id });

                    }
                    else
                    {
                        _logger.LogDebug($"deleteOrphanedPages pageId:{selectedPage.pageId} is  locked");
                    }

                }
                catch (Exception ex)
                {
                    //we don't want a single page that cannot be deleted to block everything else. so log and continue
                    _logger.LogError(ex, $"deleteOrphanedPages pageId:{selectedPage.pageId} failed to delete ");
                }
                finally
                {
                    toDeleteList = toDeleteList.Where(p => p.id != selectedPage.id).ToArray();
                }

            }

        }

    }


    public class PageDeleteTask : IHostedService
    {
        readonly commonInterfaces.IRevAuthDatabase _authDb;
        readonly IConfiguration _configuration;
        private readonly ILogger _logger;
        readonly IPageDeleteService _pageDeleteService;
        readonly reactBase.ICacheProvider _cache;
        readonly string _currentRevInstance;

        public PageDeleteTask(
            commonInterfaces.IRevAuthDatabase authDb,
            IConfiguration configuration,
            IPageDeleteService deleteService,
            reactBase.ICacheProvider cache,
            ILogger<PageDeleteService> logger
        )
        {
            _logger = logger;
            _pageDeleteService = deleteService;
            _authDb = authDb;
            _cache = cache;
            _configuration = configuration;

            _currentRevInstance = configuration["multisite:currentInstance"];
            if (string.IsNullOrWhiteSpace(_currentRevInstance))
                throw new Exception("PageDeleteTask: multisite:currentInstance not set in configuration");

        }

        bool _stopTask = false;

        public Task StartAsync(CancellationToken cancellationToken)
        {
            var allWkspcs = _authDb.getQueryable<commonInterfaces.dbDataTypes.WorkspaceModel>()
                .Where(w => w.revInstanceName == _currentRevInstance)

                .ToArray()
                ;

            _logger.LogInformation($"StartAsync : staring for {allWkspcs.Length} workspaces");

            //so different threads can pick different parts
            var chunks = allWkspcs.Shuffle().toChunks(10);

            Task.Run(async () =>
            {
                var done = await Task.WhenAll(chunks.Select(async wkspaceList =>
                {
                    while (!_stopTask)
                    {
                        try
                        {
                            foreach (var workSpace in wkspaceList)
                            {
                                _logger.LogDebug($"StartAsync:workSpaceId:{workSpace.id} starting ");
                                var dbName = components.workspace.Resolver.revdbNameFromWorkspaceId(workSpace.id);
                                await _pageDeleteService.deleteOrphanedPages(
                                    new MongoDbService.RevDatabase(components.workspace.Resolver.getMongoConnectionstring(_configuration), dbName, workSpace),
                                    components.workspace.Resolver.revStorageServiceFromWorkspaceId(_configuration, _cache, workSpace.id, _logger)
                                    );

                            }
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError(ex, $"failed in loop, continuing");
                        }

                        await Task.Delay(TimeSpan.FromMinutes(10));
                    }

                    return true;
                }));
            });

            return Task.FromResult(true);

        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _stopTask = true;
            return Task.CompletedTask;
        }
    }
}
