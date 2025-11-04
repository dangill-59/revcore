using commonInterfaces;
using commonInterfaces.dbDataTypes;
using components.workspace;
using ConcurrentCollections;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json;

using revMQAbstractions;
using RevStorage;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Utilities;
using RevRepositoryServices;

namespace components.listPages
{
    public partial class ObservePageTask :
        MassTransit.IConsumer<PageTypeUpdated>, MassTransit.IConsumer<MassTransit.Fault<PageTypeUpdated>>,
        MassTransit.IConsumer<JobCompleted>
    {
        readonly ILogger _logger;
        readonly ITaskSignerservice _signer;
        readonly IRevDatabase _revDb;
        readonly IWaitforJob _pageadoneWaiter;
        readonly IRevStorageService _storage;
        readonly IDistributedCache _distributedCache;
        readonly IRepositoryManager _repoManager;



        public ObservePageTask(
            ILogger<ObservePageTask> logger,
            ITaskSignerservice signer,
            IRevStorageService storage,
            IDistributedCache distributedCache,
            IWaitforJob pageadoneWaiter,
            IRevDatabase revDb,
            ITemplatesManager templatesManager,
            IRepositoryManager repoManager
            )
        {
            _logger = logger;
            _storage = storage;
            _signer = signer;
            _revDb = revDb;
            _pageadoneWaiter = pageadoneWaiter;
            _distributedCache = distributedCache;
            _templatesManager = templatesManager;
            _repoManager = repoManager;
        }

        public Task Consume(MassTransit.ConsumeContext<MassTransit.Fault<PageTypeUpdated>> messageCtx)
        {
            /*
			await _pageadoneWaiter.jobCompletedReceived(JobCompleted.CreateJobError(JobExecutionContext.DUMMYParent, null, null, 
				messageCtx.Message.Message.pageId,   messageCtx.Message.Exceptions)
			*/

            return Task.CompletedTask;
        }

        public async Task Consume(MassTransit.ConsumeContext<PageTypeUpdated> messageCtx)
        {
            var pageHolders = await _revDb.getCollection<PageHolderModel>().Find(d => d.pages.Any(p => p.id == messageCtx.Message.pageId || p.originalId == messageCtx.Message.pageId)).ToListAsync();
            var effected = new PagesEffectedModel
            {
                pageHolder = pageHolders.FirstOrDefault(),
                effectedPageIds = new[] { messageCtx.Message.pageId },
                completedJobId = messageCtx.Message.pageId
            };

            if (null != effected.pageHolder)
            {
                // Get workspace ID from the PageTypeUpdated message or from the RevDatabase
                var workspaceId = messageCtx.Message.workspaceId ?? _revDb.workspaceId;
                effected.pageHolder = hasRevImages.FixPageHolderForWireStatic(_logger, effected.pageHolder, _distributedCache, pid => _storage.publicPath(pid), workspaceId);
            }

            //await _pageadoneWaiter.markJobCompleted<PagesEffectedModel>(effected);
            await _pageadoneWaiter.jobCompletedReceived(JobCompleted.CreateJobCompleted(JobExecutionContext.DUMMYParent, null, null, messageCtx.Message.pageId, effected));
        }


        public async Task Consume(MassTransit.ConsumeContext<JobCompleted> messageCtx)
        {
            await _pageadoneWaiter.jobCompletedReceived(messageCtx.Message);
        }
    }


}
