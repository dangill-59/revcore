using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using reactBase;
using restUpdate;
using Utilities;
using revMQAbstractions;
using components.lookup;
using MongoDbService;
using MongoDB.Driver;
using System.Collections.Concurrent;
using NeoSmart.AsyncLock;
using RevStorage;
using MoreLinq;
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Sas;

namespace components.listPages
{
    [Route("api/[controller]")]
    [Authorize]
    //[ServiceFilter(typeof(hasRevImages))]
    [TypeFilter(typeof(hasRevImages))]
    public class PagesController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly IStorageProvider _storageV1;
        readonly IRevStorageService _storageV2;
        readonly restUpdate.IMultipartRequestHandler _multipartHandler;
        readonly IWorkspaceResolver _resolver;
        private readonly ILogger _logger;
        readonly IPageDeleteService _pageDeleteService;
        readonly IConfiguration _configuration;

        readonly IDistributedLockService _distributedLock;
        readonly bool _usingS3;
        readonly bool _usingCloud;
        readonly bool _usingAzure;
        readonly IRevAudit _revAudit;

        readonly IDistributedCache _distributedCache;

        readonly IRevMQBus _mq;
        readonly IWaitforJob _jobWaiter;

        public PagesController(commonInterfaces.IRevDatabase revDb,
            IRevMQBus mq,
            IWorkspaceResolver resolver,
            IWaitforJob pageadoneWaiter,
            ILogger<PagesController> logger,
            IPageDeleteService pageDeleteService,
            IConfiguration configuration,

            IStorageProvider storage,
            IRevStorageService storageV2,
            IDistributedLockService distributedLock,
            IDistributedCache distributedCache,
            IRevAudit revAudit,
            //IRedLockService redRockService,
            restUpdate.IMultipartRequestHandler multipartHandler)
        {
            _distributedCache = distributedCache;
            _revAudit = revAudit;
            //_redRockService = redRockService;
            _distributedLock = distributedLock;
            _revDb = revDb;
            _configuration = configuration;
            _multipartHandler = multipartHandler;
            _storageV1 = storage;
            _storageV2 = storageV2;


            _logger = logger;

            _resolver = resolver;
            _pageDeleteService = pageDeleteService;

            _mq = mq;
            _jobWaiter = pageadoneWaiter;

            _usingS3 = configuration["multisite:storage"] == "s3";
            _usingAzure = configuration["multisite:storage"] == "azure";
            _usingCloud = configuration["multisite:storage"] == "s3" || configuration["multisite:storage"] == "azure";
        }

        readonly static string DEFAULT_SCAN_BATCH = "defaultscanbatch";

        /// <summary>
        /// checks cart ownership and creates default if emptty cart ID
        /// </summary>
        /// <param name="cartId"></param>
        /// <returns>the page cart</returns>
        async Task<PageHolderModel> EnsureOwnerShip(string id, PermissionType permissionType)
        {
            _logger.LogDebug($"EnsureOwnerShip: Entered");

            var user = this.currentLoggedonUser();
            if (DEFAULT_SCAN_BATCH == id)
            {
                _logger.LogDebug($"EnsureOwnerShip: returning primary cart");

                return await CartsController.EnsurePrimaryCart(_revDb, user);
            }
            else
            {
                var cart = _revDb.getQueryable<PageHolderModel>()
                    .Where(c => c.id == id)
                    .Single();

                this.EnsurePageHolderAccess(cart, _resolver, _revDb, _logger, permissionType);

                _logger.LogDebug($"EnsureOwnerShip: returning cart");
                return cart;
            }


        }

        [HttpGet("original/{encodedPageId}")]
        public async Task<IActionResult> getOriginal(string encodedPageId)
        {
            var pageId = System.Web.HttpUtility.UrlDecode(encodedPageId);

            //pageId =page/24d996ec-013b-48f4-946b-0fbf302bbfbd/converted-1.png 
            //var folderName = System.IO.Path.GetDirectoryName(pageId).Replace('\\','/');
            //var originalFileName = $"{folderName}/original.*";

            var found = (await _storageV1.ensureMediaExistsAsync(pageId)).key;

            //var ext = System.IO.Path.GetExtension(found).TrimStart('.');

            var stream = _storageV1.getImageStream(found);
            stream.Seek(0, System.IO.SeekOrigin.Begin);

            return new FileStreamResult(stream, "application/octet-stream")
            {
                FileDownloadName = System.IO.Path.GetFileName(pageId)   //  $"original.{ext}"
            };
        }

        /// <summary>
        /// called by clinet to correct page dimentions
        /// it is needed cause we might have incorrect dimention info in the db
        /// </summary>
        /// <param name="encodedPageId"></param>
        /// <param name="width"></param>
        /// <param name="height"></param>
        /// <returns></returns>
        [HttpGet("updateDimention/{encodedPageId}")]
        public async Task updatePageDimention(string encodedPageId, [FromQuery] int width, [FromQuery] int height)
        {
            var pageId = System.Web.HttpUtility.UrlDecode(encodedPageId);

            _logger.LogDebug($"updatePageDimention {pageId}, {width}, {height}");


            if (0 == width || 0 == height || string.IsNullOrWhiteSpace(pageId))
                throw new ExceptionWithCode("invalid arguments");

            var allPageHoldersWithThisPage = _revDb.getQueryable<PageHolderModel>()
                    .Where(c => null != c.pages && c.pages.Any(p => p.id == pageId))
                    .Select(c => c.id)
                    .ToArray();

            foreach (var cartId in allPageHoldersWithThisPage)
            {
                try
                {
                    //we want the locked pageHolder now, so don't get it in bulk
                    using (var mylock = await _distributedLock.withLock<PageHolderModel>(async () =>
                    {
                        return await EnsureOwnerShip(cartId, PermissionType.view);
                    }))
                    {
                        var pageInQuestion = mylock.lockedObject.pages.SingleOrDefault(p => p.id == pageId);

                        pageInQuestion.height = height;
                        pageInQuestion.width = width;

                        await _revDb.AddorUpdateAsync(mylock.lockedObject);

                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"failed updating page dimention ${pageId}");
                }
            }
        }

        [HttpGet("process/{pageId}")]
        public Task<PagesEffectedModel> processPage(string pageId)
        {
            return processPage(pageId, DEFAULT_SCAN_BATCH);
        }

        //temporary fix to throttle mutiple rdenrpage requests
        static readonly ConcurrentDictionary<string, DateTime> _throttleRenderPages = new ConcurrentDictionary<string, DateTime>();

        static readonly AsyncLock _renderReqLock = new AsyncLock();

        static int _renderreqId = 1;

        /// <summary>
        /// Called by UI when It needs to Render an un processed page
        /// Could be converted page as well
        /// </summary>
        /// <param name="pageId"></param>
        /// <param name="cartId"></param>
        /// <returns></returns>
        [HttpGet("process/{cartId}/{pageId}")]
        public async Task<PagesEffectedModel> processPage(string pageId, string cartId)
        {
            var escapedPageId = Uri.UnescapeDataString(pageId);

            var renderreqId = System.Threading.Interlocked.Increment(ref _renderreqId);

            _logger.LogDebug($"process page ({renderreqId}) -> {escapedPageId} entered");


            var cart = await EnsureOwnerShip(cartId, PermissionType.view);

            var pagesInDocs = await _revDb.getCollection<PageHolderModel>().findPageinDocsAsync(escapedPageId);
            if (null == pagesInDocs)
                throw new ExceptionWithCode($"page {escapedPageId} not found");

            if (!pagesInDocs.docIds.Contains(cart.id))
            {
                throw new ExceptionWithCode($"page {escapedPageId} is not in document {cartId}");
            }

            if (null == pagesInDocs.page.pageType || pagesInDocs.page.pageType == PageImageTypeModel.nonweb || pagesInDocs.page.offLineProcessingOnly)
            {
                _logger.LogDebug($"process page ({renderreqId}) -> {escapedPageId} is rendered or is non web or marked for offline");

                return new PagesEffectedModel
                {
                    pageHolder = cart,
                    effectedPageIds = new[] { pageId }
                };
            }

            /*Dee: We have an issue with multiple process pages coming in for the same page. Causing expensive operations
			 * Lets lock this that way only one page render request is pubshed at a time.. 
			 * We have server affinity setup so won't have  to worry about server farms yet
			 */

            using (await _renderReqLock.LockAsync())
            {
                _logger.LogDebug($"process page ({renderreqId}) -> {escapedPageId} checking if already published");
                if (!_throttleRenderPages.ContainsKey(escapedPageId))
                {
                    _logger.LogDebug($"process page ({renderreqId}) -> {escapedPageId} publishing render request");
                    await _mq.publishMessageAsync(new RenderPageRequest(JobExecutionContext.createNew(), escapedPageId, _revDb.workspaceId, RequestPriority.uiRequested));

                    _throttleRenderPages.TryAdd(escapedPageId, DateTime.Now.AddSeconds(20));
                    _logger.LogDebug($"process page ({renderreqId}) -> {escapedPageId} marked published");
                }
                else
                {
                    _logger.LogDebug($"page  ({renderreqId}) {escapedPageId} render already requested");
                }

            }

            ///removed stale requests.
            var _donotWait1 = Task.Run(() =>
            {
                foreach (var key in _throttleRenderPages
                    .Where(kv => kv.Value < DateTime.Now).ToArray())
                {

                    _logger.LogDebug($"removing page {escapedPageId} from _throttleRenderPages");

                    DateTime t;
                    _throttleRenderPages.TryRemove(key.Key, out t);

                }

            });

            if (0 == pagesInDocs.page.size)
            {
                _logger.LogDebug($"image size unknown getting from storage -> {pagesInDocs.page.id}");

                var media = await _storageV2.MediaExistsAsync(pagesInDocs.page.id);
                if (null == media)
                {
                    _logger.LogWarning($"image {pagesInDocs.page.id} not found in storage");
                }
                else
                {
                    pagesInDocs.page.size = media.size;

                }
            }

            var maxImmediateSize = _resolver.getCurrentWorkspace().getmaxImmediatePageProcessingSize(_configuration);
            if (pagesInDocs.page.size > maxImmediateSize)
            {
                _logger.LogDebug($"page size {pagesInDocs.page.size} >  {maxImmediateSize}. will do offline processing");

                //var originalImage = await _revDb.ensureOriginalImage(_logger, pagesInDocs.page.id);

                var done = await _revDb.getCollection<PageHolderModel>().UpdateManyAsync(
                    Builders<PageHolderModel>.Filter.ElemMatch(ph => ph.pages, p => p.id == pagesInDocs.page.id),
                    Builders<PageHolderModel>.Update
                        .Set(p => p.pages.ElementAt(-1).offLineProcessingOnly, true)
                    );

                if (!done.IsAcknowledged)
                {
                    throw new Exception("mongo failed to acknowledge");
                }

                foreach (var p in cart.pages?.Where(p => p.id == pagesInDocs.page.id))
                {
                    p.offLineProcessingOnly = true;
                }

                return new PagesEffectedModel
                {
                    pageHolder = cart,
                    effectedPageIds = new[] { pageId }
                };
            }



            var ret = await _jobWaiter.waitForJobDoneNOCache<PagesEffectedModel>(this.currentLoggedonUser(), escapedPageId);

            _logger.LogDebug($"process page ({renderreqId}) -> {escapedPageId} render wait completed");

            //ret.pageHolder = hasRevImages. FixPageHolderForWireStatic(ret.pageHolder,_storage,_distributedCache, )
            return ret;

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="pageId"></param>
        /// <returns></returns>
        [HttpGet("reprocss/{cartId}")]
        public async Task<bool> reProcess(string cartId)
        {
            if (string.IsNullOrEmpty(cartId))
            {
                throw new Exception($"cartId is null");
            }

            var doc = await _revDb.getCollection<DocumentModel>().Find(d => d.id == cartId).SingleOrDefaultAsync();

            var nonWebPages = doc.pages.Where(p => p.pageType == PageImageTypeModel.nonweb).ToArray();

            var noOriGinals = nonWebPages.Where(p => p.originalId == null).ToArray();
            foreach (var originalpage in noOriGinals)
            {
                var deleted = await _revDb.getCollection<OriginalFileModel>().DeleteOneAsync(d => d.pageId == originalpage.id);
                if (deleted.IsAcknowledged && deleted.DeletedCount == 1)
                {
                    _logger.LogInformation($"{originalpage.id} delete from originalFiles collection");
                }

                var allPagesWithIndex = doc.pages.Select((p, i) => new { p, i }).ToArray();

                var pageToChange = allPagesWithIndex.Where(p => p.p.id == originalpage.id).FirstOrDefault();

                if (null != pageToChange)
                {
                    var update = Builders<DocumentModel>.Update.Set($"pages.{pageToChange.i}.pageType", PageImageTypeModel.unprocessed);
                    var updateResult = await _revDb.getCollection<DocumentModel>().UpdateOneAsync(d => d.id == doc.id, update);
                    if (updateResult.IsAcknowledged && updateResult.ModifiedCount > 0)
                    {
                        _logger.LogInformation($"updated originaId {originalpage.id} and pageType unprocessed in doc {cartId}");
                    }
                }
                else
                {
                    _logger.LogError("we have logic issues");
                }
            }


            var groupbyOriginalId = nonWebPages.Where(p => p.originalId != null).Select(g => g.originalId).Distinct().ToArray();

            foreach (var originals in groupbyOriginalId)
            {
                var deleted = await _revDb.getCollection<OriginalFileModel>().DeleteOneAsync(d => d.pageId == originals);
                if (deleted.IsAcknowledged && deleted.DeletedCount == 1)
                {
                    _logger.LogInformation($"{originals} delete from originalFiles collection");
                }

                var pages = (await _revDb.getCollection<DocumentModel>().Find(d => d.id == cartId).Project(c => c.pages).ToListAsync()).FirstOrDefault()?.ToArray();

                var allPagesWithIndex = pages.Select((p, i) => new { p, i }).ToArray();

                var splittedpages = allPagesWithIndex.Where(p => p.p.originalId == originals).ToArray();

                if (0 == splittedpages.Length)
                {
                    _logger.LogWarning("no splitted page found skipping");
                    continue;
                }

                var update = Builders<DocumentModel>.Update
                .Set($"pages.{splittedpages[0].i}.pageType", PageImageTypeModel.unprocessed)
                .Set($"pages.{splittedpages[0].i}._id", originals);

                var updateResult = await _revDb.getCollection<DocumentModel>().UpdateOneAsync(d => d.id == cartId, update);

                if (updateResult.IsAcknowledged && updateResult.ModifiedCount == 1)
                {
                    {
                        var pageToPull = splittedpages.Skip(1);
                        var pullFilter = Builders<DocumentModel>.Update.PullFilter("pages",
                            Builders<PageImageModel>.Filter.In(d => d.id, pageToPull.Select(p => p.p.id).ToArray()));
                        var pullResult = await _revDb.getCollection<DocumentModel>().UpdateOneAsync(d => d.id == doc.id, pullFilter);
                        if (pullResult.IsAcknowledged && pullResult.ModifiedCount == 1)
                        {
                            _logger.LogInformation($"pages are pulled from document {cartId} for original id {originals}");
                        }
                    }
                }
                else
                {
                    _logger.LogInformation($"{cartId} didn't updated");
                }
            }
            return true;
        }

        /// <summary>
        /// Called after the page has been upload
        /// </summary>
        /// <param name="pageIds"></param>
        /// <param name="docId"></param>
        /// <param name="order"></param>
        /// <returns></returns>
        [HttpPost("finalize")]
        public Task<PagesEffectedModel> FinalizeDirectUpload([FromBody] string[] pageIds,
            [FromQuery] string docId = null,
            [FromQuery] string scanBatchName = null,
            [FromQuery] int? order = null)
        {
            if (null == pageIds)
                throw new ArgumentNullException("pageIds");

            return FinalizeDirectUpload(pageIds.Select(
                pid => new FinalizepageModel { pageId = pid }).ToArray(),
                docId, scanBatchName, order);
        }


        /// <summary>
        /// This method is called to add an uploaded page to a pageHolder
        /// </summary>
        /// <param name="pagesToFinalize"></param>
        /// <param name="docId"></param>
        /// <param name="scanBatchName"></param>
        /// <param name="order"></param>
        /// <returns></returns>
        [HttpPost("finalizeWithOriginal")]
        public async Task<PagesEffectedModel> FinalizeDirectUpload([FromBody] FinalizepageModel[] pagesToFinalize,
            [FromQuery] string docId = null,
            [FromQuery] string scanBatchName = null,
            [FromQuery] int? order = null,
            [FromQuery] int? uploadSize = null
            )
        {

            if (null == pagesToFinalize)
                throw new ArgumentNullException("pagesToFinalize");

            _logger.LogDebug($"FinalizeDirectUpload entered");

            if (string.IsNullOrWhiteSpace(docId))
            {

                if (!string.IsNullOrEmpty(scanBatchName))
                {

                    var user = this.currentLoggedonUser();
                    var namedCart = _revDb.getQueryable<PageHolderModel>()
                        .OfType<ScanBatchModel>()
                        .Where(c => c.name == scanBatchName)
                        .FirstOrDefault();

                    if (null == namedCart)
                    {
                        namedCart = await _revDb.AddorUpdateAsync(new ScanBatchModel
                        {
                            isPrimary = false,
                            owner = user,
                            name = scanBatchName
                        });
                    }


                    docId = namedCart.id;
                }
                else
                {
                    docId = DEFAULT_SCAN_BATCH;
                }
            }


            _logger.LogDebug($"FinalizeDirectUpload : verify that all media exists");

            var mediasFound = (await Task.WhenAll(pagesToFinalize.Select(async pageToFinaize =>
            {
                _logger.LogDebug($"finalizing page : ensuring media exists {pageToFinaize.originalPageName ?? ""} ->   {pageToFinaize.pageId}");

                int i = 0;
                while (true)
                {
                    try
                    {
                        return new
                        {
                            pageId = pageToFinaize.pageId,
                            mediaFound = await _storageV1.ensureMediaExistsAsync(pageToFinaize.pageId)
                        };
                    }
                    catch (Exception ex)
                    {
                        if (i++ > 5)
                        {
                            _logger.LogError(ex, $"FinalizeDirectUpload : media {pageToFinaize.pageId} doesn't exist");

                            var fileName = string.IsNullOrEmpty(pageToFinaize.originalPageName) ? pageToFinaize.pageId : pageToFinaize.originalPageName;

                            throw new ExceptionWithCode(message: $"File {fileName} failed to upload", innerException: ex);
                        }

                        _logger.LogDebug(ex, $"media {pageToFinaize.pageId} not found may be it's just uploaded. Trying again");
                        await Task.Delay(TimeSpan.FromSeconds(1));
                    }
                }

            }))).ToDictionary(k => k.pageId, v => v.mediaFound);


            _logger.LogDebug($"FinalizeDirectUpload : acquiring lock");

            var result = new PagesEffectedModel
            {
                pageHolder = await EnsureOwnerShip(docId, PermissionType.edit)
            };

            _logger.LogDebug($"FinalizeDirectUpload cartId:{docId} entered");

            if (null == result.pageHolder.pages)
            {
                // if the pages array does not exist create an empty one. That we we can easly push into that array

                result.pageHolder.pages = new PageImageModel[] { };

                var createArray = await _revDb.getCollection<PageHolderModel>().UpdateOneAsync(
                    p => p.id == result.pageHolder.id && null == p.pages,
                    Builders<PageHolderModel>.Update
                    .Set(p => p.pages, result.pageHolder.pages)

                    );

                if (!createArray.IsAcknowledged)
                {
                    throw new Exception("mongo failed to acknowledge");
                }


            }


            var newPages = new List<PageImageModel>();
            foreach (var pageToFinaize in pagesToFinalize)
            {
                //make sure this pageID is not aready added
                if (null != result.pageHolder.pages.FirstOrDefault(p => p.id == pageToFinaize.pageId))
                {
                    _logger.LogDebug($"{pageToFinaize.pageId} already is finalized");
                    //throw new ExceptionWithCode("This image already exists");
                    continue;
                }

                var newPage = new PageImageModel
                {
                    id = pageToFinaize.pageId,
                    originalPageName = pageToFinaize.originalPageName,
                    orderNumber = order ?? result.pageHolder.pages.Count(),
                    pageType = PageImageTypeModel.unprocessed,
                    size = mediasFound[pageToFinaize.pageId].size,
                    offLineProcessingOnly = mediasFound[pageToFinaize.pageId].size > _resolver.getCurrentWorkspace().getmaxImmediatePageProcessingSize(_configuration)
                };

                if (newPage.size > _resolver.getCurrentWorkspace().getmaxImmediatePageProcessingSize(_configuration))
                {
                    newPage.proccesingTags = new[] { "over50MB" };

                }

                if (null != uploadSize)
                {
                    if (uploadSize.Value != newPage.size)
                    {
                        _logger.LogWarning($"size of media is different after upload uploadSize ={uploadSize}, mediaFoundsize = {newPage.size}");
                    }
                }

                newPages.Add(newPage);

                result.pageHolder.pages = result.pageHolder.pages.Concat(new[] { newPage });

                FixOrder(result.pageHolder, newPage);

            }

            result.effectedPageIds = newPages.Select(p => p.id).ToArray();

            _logger.LogDebug($"FinalizeDirectUpload Saving to db");

            var done = await _revDb.getCollection<PageHolderModel>().UpdateOneAsync(p => p.id == result.pageHolder.id,
                Builders<PageHolderModel>.Update
                .PushEach(p => p.pages, newPages)
                .Set(p => p._mongobackedPageOrders, result.pageHolder._mongobackedPageOrders)
                );

            if (!done.IsAcknowledged)
            {
                throw new Exception("mongo failed to acknowledge");
            }


            _logger.LogDebug($"FinalizeDirectUpload page done");

            await Task.WhenAll(result.effectedPageIds.Select(async pId =>
                await _mq.publishMessageAsync(new MQDocumentPageUpdated(JobExecutionContext.createNew(), pId, DocumentPageUpdatedAction.added, _revDb.workspaceId))));

            return result;


        }





        static void FixOrder(PageHolderModel pageHolder, PageImageModel movedImage = null)
        {
            if (null == pageHolder.pages)
            {
                //todo: log
                return;
            }

            //load pageorders
            if (null != pageHolder.pageOrders)
            {
                foreach (var p in pageHolder.pages)
                {
                    if (pageHolder.pageOrders.ContainsKey(p.id))
                        p.orderNumber = pageHolder.pageOrders[p.id];
                }
            }

            if (null != movedImage)
            {
                var imagesLaterIntheList = pageHolder.pages.Where(p => p.orderNumber >= movedImage.orderNumber && p.id != movedImage.id).ToArray();
                foreach (var p in imagesLaterIntheList)
                    p.orderNumber++;
            }

            var done = pageHolder.pages.OrderBy(p => p.orderNumber).Select((p, i) =>
             {
                 p.orderNumber = i;
                 return true;
             }).ToArray();

            pageHolder.pageOrders = pageHolder.pages.ToDictionary(k => k.id, v => v.orderNumber);
        }

        [HttpDelete]
        public Task delete([FromBody] string[] req)
        {
            return delete(req, DEFAULT_SCAN_BATCH);
        }

        //not all client can delete with bdy so
        [HttpPost("delete/{cartId}")]
        [HttpDelete("{cartId}")]
        public async Task delete([FromBody] string[] req, string cartId)
        {
            var cart = await EnsureOwnerShip(cartId, PermissionType.delete);
            var currentpages = cart.pages ?? new PageImageModel[] { };

            var pagestoDelete = currentpages.Where(p => req.Contains(p.id)).ToArray();
            cart.pages = currentpages.Where(p => !req.Contains(p.id)).ToArray();

            //it is safe to set pages fro deletion before removing from document
            //as if pages are still in the document it will not be deleted
            await _pageDeleteService.SetPagesForDeletionAsync(_revDb, pagestoDelete, null, this.currentLoggedonUser(), cartId);
            await _revDb.AddorUpdateAsync(cart);

            /*
			foreach (var p in pagestoDelete)
			{
				
				_revAudit.Log(AuditAction.imageDeleteRequested, this.currentLoggedonUser(),
					p.id,
					_revDb.workspaceName,
					new Dictionary<string, string>
					{
						{"pageHolderId",cartId }
					});

			}
			*/

        }

        /// <summary>
        /// reorders the list.It inserts the new page order and reorders the rest of the list.
        /// </summary>
        /// <param name="req"></param>
        /// <param name="cartId"></param>
        /// <returns>the new page orders</returns>
        [HttpPost("reorder/{cartId?}")]
        public async Task<Dictionary<string, int>> reorder([FromBody] ImageReorderReqModel req, string cartId = null)
        {
            if (string.IsNullOrWhiteSpace(cartId))
                cartId = DEFAULT_SCAN_BATCH;


            var pageHolder = await EnsureOwnerShip(cartId, PermissionType.edit);

            var currentpages = pageHolder.pages ?? new PageImageModel[] { };
            var pageMap = currentpages.ToDictionary(k => k.id, v => v);

            if (!pageMap.ContainsKey(req.droppedImageId))
                throw new ExceptionWithCode("dropped page not found", System.Net.HttpStatusCode.BadRequest);

            if (!pageMap.ContainsKey(req.targetImageId))
                throw new ExceptionWithCode("target page not found", System.Net.HttpStatusCode.BadRequest);

            //load pageorders
            if (null == pageHolder.pageOrders)
            {
                _logger.LogDebug($"null pageOrder for holderID {cartId}, fixing orders ");
                FixOrder(pageHolder);
            }

            var targetOrderNumber = pageMap[req.targetImageId].orderNumber;


            var higherpages = currentpages.Where(p => p.orderNumber >= targetOrderNumber && p.id != req.droppedImageId).ToArray();
            foreach (var p in higherpages)
                p.orderNumber++;

            pageMap[req.droppedImageId].orderNumber = targetOrderNumber;


            var reorder = 0;
            foreach (var p in currentpages.OrderBy(p => p.orderNumber))
            {
                p.orderNumber = reorder++;
            }

            pageHolder.pageOrders = pageHolder.pages.ToDictionary(k => k.id, v => v.orderNumber);
            await _revDb.AddorUpdateAsync(pageHolder);

            return currentpages.ToDictionary(k => k.id, v => v.orderNumber);
        }


        [HttpGet("ocrText/{escapedPageId}")]
        public async Task<searchView.TextinPagesResponceModel[]> getOCRText(string escapedPageId)
        {
            if (string.IsNullOrWhiteSpace(escapedPageId))
                throw new ArgumentNullException(nameof(escapedPageId));

            var pageId = Uri.UnescapeDataString(escapedPageId);

            var originalImage = await _revDb.ensureOriginalImage(_logger, pageId);

            if (null == originalImage)
            {
                throw new RevMQNoRetryFailure($"page {pageId} not found in OriginalFileModel collection");
            }

            if (!(originalImage.ocrStatus == OCRStatusModel.recognized || originalImage.ocrStatus == OCRStatusModel.indexed))
            {
                throw new ExceptionWithCode($"Page has not yet been OCRed");
            }

            var engineUsed = originalImage.ocrFiles?.Keys?.FirstOrDefault();
            if (string.IsNullOrWhiteSpace(engineUsed))
            {
                throw new ExceptionWithCode($"Page has not yet been OCRed with any engine");
            }

            if (null == originalImage.ocrFiles || null == originalImage.ocrFiles[engineUsed] ||
                                originalImage.ocrFiles[engineUsed].Length == 0)
            {
                throw new ExceptionWithCode($"empty ocrFiles. No OCR data found");
            }

            OcrFilesTypesModel ocrEngine;
            if (!Enum.TryParse<OcrFilesTypesModel>(engineUsed, out ocrEngine))
            {
                throw new ExceptionWithCode($"invalid OCR engine {engineUsed}");
            }


            var blocks = (await Task.WhenAll(originalImage.ocrFiles[engineUsed].Select(async (ocrDataPath, ocrFileNumber) =>
            {
                IEnumerable<OCRData> ocrData = null;
                switch (ocrEngine)
                {
                    case OcrFilesTypesModel.googleVisionOCr:
                        ocrData = GoogleOCR.ReadGoogleOcr.read(_logger, await _storageV2.getImageStreamAsync(ocrDataPath), originalImage.pageId, ocrFileNumber, true);
                        break;
                    case OcrFilesTypesModel.tessOCRHocr:
                        ocrData = TessOCR.ReadHOcr.read(_logger, await _storageV2.getImageStreamAsync(ocrDataPath), originalImage.pageId, ocrFileNumber);
                        break;
                    default:
                        throw new Exception($"cannot analyse data from OCR engine {ocrEngine}");
                }

                return ocrData.ToArray();

            }))).SelectMany(b => b).ToArray();

            if (pageId == originalImage.pageId)
            {
                _logger.LogDebug($"page {pageId} is original page so all blocks are for this page");
            }
            else
            {
                if (null == originalImage.convertedPages)
                {
                    throw new ExceptionWithCode("rendered pages not found");
                }

                var pageNo = originalImage.convertedPages.Select((value, index) => new { value.id, index })
                        .Where(pair => pair.id == pageId)
                        .Select(pair => pair.index + 1)
                        .FirstOrDefault() - 1;
                if (-1 == pageNo)
                {
                    throw new ExceptionWithCode("rendered page not found");
                }

                blocks = blocks.Where(b => b.metadata.pageNo == pageNo).ToArray();

            }

            return blocks.Select(b => new searchView.TextinPagesResponceModel
            {
                boundingBox = b.metadata.boundingBox,
                highlights = new[] { b.text }

            }).ToArray();

        }

        #region directupload

        /// <summary>
        /// used when not using s3 this creates the newpage ID and actually saves the media
        /// </summary>
        /// <param name="file"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost("newpageid/{ext}")]
        public async Task<NewPageDirectModel> AddImage([FromForm] IFormFile file, string ext)
        {
            if (_usingCloud)
                throw new ExceptionWithCode("Please use direct upload for Cloud");

            var ret = await newPageidForUploadAsync(ext);

            await _storageV1.SaveStreamAsync(ret.id, file.OpenReadStream());

            return ret;
        }


        /// <summary>
        /// get the path of a new page for direct upload to S3
        /// </summary>
        /// <param name="ext">the extension to use for the storage key</param>
        /// <param name="createSignedURL">create a complete signed URL for upload</param>
        /// <returns></returns>
        [HttpGet("newpageid/{ext}")]
        public Task<NewPageDirectModel> newPageidForDirectUploadAsync(string ext, [FromQuery] bool createSignedURL = false)
        {
            if (!_usingCloud)
                throw new ExceptionWithCode("Not using Cloud", System.Net.HttpStatusCode.NotImplemented);

            return newPageidForUploadAsync(ext, createSignedURL);
        }

        /// <summary>
        /// This is the method that creates Id all Pages that are imported into  rev
        /// </summary>
        /// <param name="ext"></param>
        /// <param name="createSignedURL"></param>
        /// <returns></returns>
        async Task<NewPageDirectModel> newPageidForUploadAsync(string ext, [FromQuery] bool createSignedURL = false)
        {

            _logger.LogDebug($"newPageidForUploadAsync: entered ext:{ext}, createSignedURL:{createSignedURL}");

            //we put the date in there so that we can backup on an hourly basis
            var dateStr = DateTime.Now.ToString($"yyyy-MM-dd-HH");
            var newPageFolder = $"page/{dateStr}-{Guid.NewGuid()}";

            var newPageID = $"{newPageFolder}/original.{ext.TrimStart('.')}";

            //we mark the new page for deletion after a day. In normal cases, the page will be attached to doc and the deletion thread will find it
            // and remove it from orphaned pages collection
            var deleteFailedTimeSpan = TimeSpan.FromDays(1);
#if DEBUG
			deleteFailedTimeSpan = TimeSpan.FromMinutes(5);
#endif
            _logger.LogDebug($"newPageidForUploadAsync: new page {newPageID}");

            //
            await _pageDeleteService.SetPagesForDeletionAsync(
                _revDb,
                new[] { new PageImageModel { id = newPageID } },
                DateTime.Now + deleteFailedTimeSpan
                );

            var ret = new NewPageDirectModel
            {
                id = newPageID,
            };

            if (createSignedURL)
            {
                var options = ImageController.uploadOptions(_configuration);

                if (!string.IsNullOrWhiteSpace(options.aws_url))
                {
                    //we are using minio.. set up 
                    var origin = this.originFromURL("/api/pages", _logger);

                    ret.keyForDirectUpload = _storageV1.createPresignedUrl(newPageID, true, origin);
                }
                else
                {
                    ret.keyForDirectUpload = _storageV1.createPresignedUrl(newPageID, true);
                }
            }
            else
            {
                ret.keyForDirectUpload = _storageV1.keyForDirectUpload(newPageID);
            }

            return ret;
        }

        [HttpGet("uploadOptions")]
        public ChunkUploadModel uploadOptions()
        {

            var ret = ImageController.uploadOptions(_configuration);

            if (!string.IsNullOrWhiteSpace(ret.aws_url))
            {
                //we are using minio.. set up 
                var origin = this.originFromURL("/api/pages/uploadOptions", _logger);
                ret.aws_url = origin;
            }

            return ret;
        }
        readonly static string[] _ALLOWEDDIRECTUPLODVERBS = new string[] { "POST", "PUT", "GET" };

        /// <summary>
        /// returns the url to upload to for Azure
        /// </summary>
        /// <param name="blobName"></param>
        /// <returns></returns>
        [HttpGet("getSasUrl")]
        public string getSasUrl([FromQuery] string blobName)
        {
            if (null == this.ensureWorkspaceAdmin(_resolver, true))
            {
                //ensure the user has atleast one read permission
                var allProjects = _revDb.getQueryable<ProjectModel>().ToArray();

                var allProjectsHavePermissions = null == allProjects.Where(p => null == p.permissions || p.permissions.Count() == 0).FirstOrDefault();

                if (allProjectsHavePermissions)
                {
                    var allPermissions = allProjects.SelectMany(p => p.permissions.Select(pr => pr.Value)).ToArray();

                    var userId = this.currentLoggedonUser();
                    var spcUser = _revDb.getQueryable<WorkspaceUserModel>()
                        .Where(wu => wu.userId == userId)
                        .SingleOrDefault();

                    //we might not have the user here at all
                    var userRoles = null != spcUser ? spcUser.roles : null;

                    if (null == userRoles)
                        throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);

                    bool canEdit = false;
                    foreach (var project in allProjects)
                    {
                        var CanEditRole = userRoles.FirstOrDefault(role => project.permissions.ContainsKey(role) && project.permissions[role].canEdit);
                        if (null != CanEditRole)
                        {
                            canEdit = true;
                            break;
                        }
                    }

                    if (!canEdit)
                    {
                        throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);
                    }

                }
            }

            var result = _storageV1.createPresignedUrl(blobName);
            return result;
        }

        /// <summary>
        /// creates a authorization signature to upload for AWS
        /// https://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html
        /// </summary>
        /// <param name="datetime"></param>
        /// <param name="to_sign"></param>
        /// <returns></returns>
        [HttpGet("uploadSignature")]
        public string uploadSignature([FromQuery] string datetime, [FromQuery] string to_sign, [FromQuery] string canonical_request)
        {
            if (null == this.ensureWorkspaceAdmin(_resolver, true))
            {
                //ensure the user has atleast one read permission
                var allProjects = _revDb.getQueryable<commonInterfaces.dbDataTypes.ProjectModel>().ToArray();

                var allProjectsHavePermissions = null == allProjects.Where(p => null == p.permissions || p.permissions.Count() == 0).FirstOrDefault();

                if (allProjectsHavePermissions)
                {
                    var allPermissions = allProjects.SelectMany(p => p.permissions.Select(pr => pr.Value)).ToArray();

                    var userId = this.currentLoggedonUser();
                    var spcUser = _revDb.getQueryable<WorkspaceUserModel>()
                        .Where(wu => wu.userId == userId)
                        .SingleOrDefault();

                    //we might not have the user here at all
                    var userRoles = null != spcUser ? spcUser.roles : null;

                    if (null == userRoles)
                        throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);

                    bool canEdit = false;
                    foreach (var project in allProjects)
                    {
                        var CanEditRole = userRoles.FirstOrDefault(role => project.permissions.ContainsKey(role) && project.permissions[role].canEdit);
                        if (null != CanEditRole)
                        {
                            canEdit = true;
                            break;
                        }
                    }

                    if (!canEdit)
                    {
                        throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);
                    }

                }
            }


            /* canonical_request
			 POST
/myelasticnetworkdata-dev/dee_dev_revcore2/rev_5be29cc43f45b1492cc4c4b9/page/beaba9d3-4d37-4347-bb0b-ed54382e2ae8/original.TIF
uploads=
host:s3-us-west-2.amazonaws.com
x-amz-date:20181107T080607Z

host;x-amz-date
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
			*/

            var CRLines = canonical_request.Split('\n');
            if (CRLines.Length < 2)
            {
                _logger.LogWarning($"uploadSignature invalid canonical_request : {canonical_request}");
                throw new ExceptionWithCode($"canonical_request doesn't have enough lines", System.Net.HttpStatusCode.Forbidden);
            }

            if (!_ALLOWEDDIRECTUPLODVERBS.Contains(CRLines[0]))
            {
                _logger.LogWarning($"uploadSignature canonical_request verb not allowed. canonical_request: {canonical_request}");
                throw new ExceptionWithCode("invalid request", System.Net.HttpStatusCode.Forbidden);
            }

            var dummyageId = _storageV1.keyForDirectUpload("page/");

            var uploadConfig = this.uploadOptions();

            var reqStartswith = $"/{uploadConfig.bucket}/{dummyageId}";

            if (!CRLines[1].StartsWith(reqStartswith))
            {
                _logger.LogWarning($"uploadSignature canonical_request mismatch. reqStartswith :{reqStartswith} - canonical_request: {canonical_request}");
                throw new ExceptionWithCode("invalid request", System.Net.HttpStatusCode.Forbidden);
            }


            var credsStrings = new[]
            {
                datetime.Substring(0, 8),
                _configuration.GetValue<string>("s3Storage:region"),
                "s3",
                "aws4_request"
            };

            using (var algorithm = SHA256.Create())
            {
                // Create the at_hash using the access token returned by CreateAccessTokenAsync.
                var hash = algorithm.ComputeHash(Encoding.UTF8.GetBytes(canonical_request));
                var signParts = new[]
                {
                    "AWS4-HMAC-SHA256",
                    Uri.EscapeDataString(datetime),
                    string.Join('/', credsStrings),
                    ToHexString(hash)
                };


                var calculatedToSign = /*Uri.EscapeDataString*/
            (string.Join('\n', signParts));


                if (to_sign != calculatedToSign)
                {
                    throw new ExceptionWithCode("failed to sign");
                }
            }



            var signing_key = getSignatureKey(
                key: _configuration.GetValue<string>("s3Storage:secretkey"),
                dateStamp: datetime.Substring(0, 8),
                regionName: _configuration.GetValue<string>("s3Storage:region"),
                serviceName: "s3"
                );

            var signature = HmacSHA256(to_sign, signing_key);

            // to lowercase hexits
            return ToHexString(signature);
        }

        static string ToHexString(byte[] data, bool lowercase = true)
        {
            var sb = new StringBuilder();
            for (var i = 0; i < data.Length; i++)
            {
                sb.Append(data[i].ToString(lowercase ? "x2" : "X2"));
            }
            return sb.ToString();
        }

        //https://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html#signature-v4-examples-dotnet
        static byte[] HmacSHA256(String data, byte[] key)
        {
            var hashAlgorithm = new HMACSHA256(key);

            return hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes(data));
        }

        static byte[] getSignatureKey(String key, String dateStamp, String regionName, String serviceName)
        {
            byte[] kSecret = Encoding.UTF8.GetBytes(("AWS4" + key).ToCharArray());
            byte[] kDate = HmacSHA256(dateStamp, kSecret);
            byte[] kRegion = HmacSHA256(regionName, kDate);
            byte[] kService = HmacSHA256(serviceName, kRegion);
            byte[] kSigning = HmacSHA256("aws4_request", kService);

            return kSigning;
        }


        #endregion
    }
}

// we use evaporate To send files directly to AWS
// https://github.com/TTLabs/EvaporateJS/wiki/Quick-Start-Guide
