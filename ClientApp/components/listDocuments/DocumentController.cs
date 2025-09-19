using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.listPages;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using reactBase;
using restUpdate;
using revMQAbstractions;

using Utilities;

namespace components.listDocuments
{
    [Route("api/[controller]")]
    [Authorize]
    [ServiceFilter(typeof(billing.CheckBilling))]

    public class DocumentController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;

        readonly external.IIntegrationsService _intgService;
        //readonly IRevEsHelper _esHelper;
        private readonly ILogger _logger;
        readonly IStorageProvider _storage;
        readonly IWorkspaceResolver _resolver;
        readonly components.listPages.IPageDeleteService _pageDeleteService;
        readonly IRevAudit _audit;
        //readonly IDeprecated_RabbitMQConnector _revEventPublisher;
        IConfiguration _configuration;
        readonly IRevMQBus _mq;


        public DocumentController(commonInterfaces.IRevDatabase revDb,
            IWorkspaceResolver resolver,
            IRevMQBus mq,
            external.IIntegrationsService intgService,
            //IRevEsHelper esHelper,
            IStorageProvider storage,
            IRevAudit audit,
            components.listPages.IPageDeleteService pageDeleteService,
             ILogger<DocumentController> logger, IConfiguration configuration)
        {
            _audit = audit;
            _revDb = revDb;
            _pageDeleteService = pageDeleteService;
            //_esHelper = esHelper;
            _storage = storage;
            _intgService = intgService;
            _logger = logger;
            _resolver = resolver;
            _configuration = configuration;
            //_revEventPublisher = revEventPublisher;
            //_distributedLock = distributedLock;

            _mq = mq;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="docId"></param>
        /// <returns>id of the deleted document</returns>
        [HttpDelete("{docId}")]
        public async Task<string> DeleteDocument(string docId)
        {
            var theDoc = _revDb.getQueryable<DocumentModel>()
                .Where(d => d.id == docId).SingleOrDefault();

            if (null != theDoc)
            {
                this.ensureProjectAccess(_resolver, _revDb, _logger,
                    new[] { theDoc.projectId },
                    PermissionType.delete);
            }
            else
            {
                _logger.LogWarning($"docId -> {docId} not found to be removed");
            }

            //we enq renoval from ES and then try to remove from mongo.

            await Task.WhenAll(
                _mq.publishMessageAsync(new revElasticSearch.MQUpdateDocMessage(JobExecutionContext.createNew(), docId, _revDb.workspaceId, revElasticSearch.DocUpdatedType.delete)),

                Task.Run(async () =>
                {
                    if (null == theDoc)
                    {
                        return;
                    }

                    //Lets delete all pages first
                    //also we do want these pages to show up in backup so mark them for purge in 10 hours
                    if (null != theDoc.pages)
                        await _pageDeleteService.SetPagesForDeletionAsync(_revDb, theDoc.pages.ToArray(), DateTime.Now.AddHours(10), this.currentLoggedonUser(), docId);

                    var count = await _revDb.DeleteAsync<DocumentModel>(new[] { docId });

                    _audit.Log(AuditAction.documentDeleted, this.currentLoggedonUser(), docId, _revDb.dbName);

                    if (1 != count)
                        throw new Exception($"failed deleting doc {docId}");

                }));



            return docId;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="req"></param>
        /// <returns>error array. null if the doc inserted success fully</returns>
        [HttpPost]
        public async Task<UpdateDocResultModel[]> updateDocument([FromBody] DocumentModel[] req)
        {

            if (null == req)
                throw new ArgumentNullException("req is null");

            if (0 == req.Length)
                return new UpdateDocResultModel[] { };

            //since we don't have transaction we should handle each document at a time
            //and update error log as we go


            var projectIds = req.Select(r => r.projectId).Distinct().ToArray();
            if (projectIds.Length > 1)
            {
                throw new ExceptionWithCode("All documents must belong to the same repo");
            }

            var restrictions = this.ensureProjectAccess(_resolver, _revDb, _logger,
                req.Select(r => r.projectId).ToArray(),
                PermissionType.edit);


            var docUpdater = new DocumentUpdater(_logger, _intgService, restrictions, _storage, _revDb, projectIds.Single());

            var origin = this.originFromURL("/api/document", _logger);
            var updateStarted = DateTime.Now;

            return await Task.WhenAll(req.Select(async inputDoc =>
            {
                try
                {
                    if (!inputDoc.isPlaceHolder && String.IsNullOrEmpty(inputDoc.id) && (null == inputDoc.pages || inputDoc.pages.Count() == 0))
                        throw new ExceptionWithCode("cannot save document with no pages");

                    var isNewDocument = string.IsNullOrWhiteSpace(inputDoc.id);

                    var updatedIndexs = await docUpdater.getNewIndexes(inputDoc);
                    var pagestoUpdate = await docUpdater.getPagesToUpdate(inputDoc);


                    var update = Builders<DocumentModel>.Update
                        .Set(d => d.modified, DateTime.Now)
                        .Set(d => d.catalogued, false)
                        ;

                    foreach (var index in updatedIndexs)
                    {
                        update = update.Set(index.Key, index.Value);
                    }


                    if (null != pagestoUpdate)
                    {
                        update = update.PushEach(d => d.pages, pagestoUpdate.SelectMany(dp => dp.pages));
                    }

                    if (isNewDocument)
                    {
                        update = update
                        .Set(d => d.created, DateTime.Now)
                        .Set(d => d.projectId, docUpdater.theProjectId)
                        ;
                    }


                    var filter = isNewDocument ?
                        Builders<DocumentModel>.Filter.Not(Builders<DocumentModel>.Filter.Exists(d => d.id)) : Builders<DocumentModel>.Filter.Eq(d => d.id, inputDoc.id);

                    var done = await docUpdater.pageHolderCollection.OfType<DocumentModel>()
                        .UpdateOneAsync(filter, update, new UpdateOptions { IsUpsert = true });

                    if (!done.IsAcknowledged)
                        throw new Exception("Mongo failed to acknowledge");

                    var docId = string.IsNullOrWhiteSpace(inputDoc.id) ? done.UpsertedId?.ToString() : inputDoc.id;

                    _logger.LogDebug($"Document {docId} upserted");


                    //cant add this before doc save as we don't have the ID
                    if (null != pagestoUpdate)
                    {
                        try
                        {
                            await Task.WhenAll(pagestoUpdate.SelectMany(dp => dp.pages).Select(async p =>
                                await _mq.publishMessageAsync(new MQDocumentPageUpdated(JobExecutionContext.createNew(), p.id, DocumentPageUpdatedAction.added, _revDb.workspaceId))));
                        }
                        catch (Exception ex)
                        {
                            _logger.LogCritical(ex, $"failed to kick event for document creation for doc id ");
                            throw ex;
                        }
                    }


                    _audit.Log(isNewDocument ? AuditAction.documentCreated : AuditAction.documentUpdated,
                        this.currentLoggedonUser(), inputDoc.id, _revDb.dbName, new Dictionary<string, string> { { "durationInMS", (DateTime.Now - updateStarted).ToString() } });


                    if (!inputDoc.isPlaceHolder)
                    {
                        await _mq.publishMessageAsync(new revElasticSearch.MQUpdateDocMessage(JobExecutionContext.createNew(), docId, _revDb.workspaceId, revElasticSearch.DocUpdatedType.upsert));
                    }


                    if (null != pagestoUpdate)
                    {
                        await Task.WhenAll(pagestoUpdate.Select(async ph =>
                        {

                            var removePages = Builders<PageHolderModel>.Update.PullFilter(d => d.pages,
                                Builders<PageImageModel>.Filter.In(p => p.id, ph.pages.Select(p => p.id).ToArray()));

                            var removed = await docUpdater.pageHolderCollection.UpdateOneAsync(d => d.id == ph.existingDocId, removePages);

                            if (!removed.IsAcknowledged)
                                throw new Exception("Mongo failed to acknowledge");
                        }));
                    }


                    return new UpdateDocResultModel { document = await docUpdater.pageHolderCollection.OfType<DocumentModel>().Find(d => d.id == docId).SingleAsync() };

                }
                catch (Exception ex)
                {
                    //throw new ExceptionWithCode(ex.Message, System.Net.HttpStatusCode.BadRequest, null, ex);
                    var error = reactBase.ErrorMessage.userDomainErrorMessageFromExcption(ex, _logger);
                    return new UpdateDocResultModel { error = error.Message };
                }

            }));
        }



    }


}
