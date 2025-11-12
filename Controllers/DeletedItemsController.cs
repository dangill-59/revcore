using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.listPages;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDbService;
using reactBase;
using RevStorage;
using Utilities;
using restUpdate;
using revMQAbstractions;

namespace revCore2site.Controllers
{
    /// <summary>
    /// Admin-only controller for managing soft-deleted documents and pages
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
    public class DeletedItemsController : ControllerBase
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly IWorkspaceResolver _resolver;
        readonly ILogger _logger;
        readonly IPageDeleteService _pageDeleteService;
        readonly IRevStorageService _storage;
        readonly IRevMQBus _mq;

        public DeletedItemsController(
            commonInterfaces.IRevDatabase revDb,
            IWorkspaceResolver resolver,
            ILogger<DeletedItemsController> logger,
            IPageDeleteService pageDeleteService,
            IRevStorageService storage,
            IRevMQBus mq)
        {
            _revDb = revDb;
            _resolver = resolver;
            _logger = logger;
            _pageDeleteService = pageDeleteService;
            _storage = storage;
            _mq = mq;
        }

        /// <summary>
        /// Get all soft-deleted documents (admin only)
        /// </summary>
        [HttpGet("documents")]
        public IActionResult GetDeletedDocuments()
        {
            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                return Forbid("Only administrators can view deleted items");
            }

            var deletedDocs = _revDb.getQueryable<DocumentModel>()
                .Where(d => d.isDeleted)
                .OrderByDescending(d => d.deletedAt)
                .Take(100)
                .ToList();

            // Enrich with project information
            var projectIds = deletedDocs.Select(d => d.projectId).Distinct().ToList();
            var projects = _revDb.getQueryable<ProjectModel>()
                .Where(p => projectIds.Contains(p.id))
                .ToList()
                .ToDictionary(p => p.id, p => p.name);

            var result = deletedDocs.Select(doc => new
            {
                id = doc.id,
                title = GetDocumentTitle(doc),
                projectId = doc.projectId,
                projectName = projects.ContainsKey(doc.projectId) ? projects[doc.projectId] : "Unknown",
                deletedBy = doc.deletedBy,
                deletedAt = doc.deletedAt,
                pageCount = doc.pages?.Count() ?? 0,
                evoDocId = doc.evoDocId,
                indexes = doc.indexes
            }).ToList();

            return Ok(result);
        }

        /// <summary>
        /// Helper to extract a document "title" from its index fields
        /// </summary>
        private string GetDocumentTitle(DocumentModel doc)
        {
            if (doc.indexes == null || doc.indexes.Count == 0)
            {
                return doc.evoDocId ?? doc.id;
            }

            // Try common title fields first
            var titleFields = new[] { "title", "name", "documentName", "customer name", "vendor name", "subject", "description" };

            foreach (var field in titleFields)
            {
                var matchingKey = doc.indexes.Keys.FirstOrDefault(k =>
                    k.Equals(field, StringComparison.OrdinalIgnoreCase));

                if (matchingKey != null && doc.indexes[matchingKey] != null)
                {
                    var value = doc.indexes[matchingKey].ToString();
                    if (!string.IsNullOrWhiteSpace(value))
                    {
                        return value;
                    }
                }
            }

            // Fallback to first non-empty index value
            var firstValue = doc.indexes.Values.FirstOrDefault(v => v != null && !string.IsNullOrWhiteSpace(v.ToString()));
            if (firstValue != null)
            {
                return firstValue.ToString();
            }

            // Last resort
            return doc.evoDocId ?? doc.id;
        }

        /// <summary>
        /// Restore a soft-deleted document (admin only)
        /// </summary>
        [HttpPost("documents/{docId}/restore")]
        public async Task<IActionResult> RestoreDocument(string docId)
        {
            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                return Forbid("Only administrators can restore deleted items");
            }

            var doc = _revDb.getQueryable<DocumentModel>()
                .Where(d => d.id == docId && d.isDeleted)
                .SingleOrDefault();

            if (doc == null)
            {
                return NotFound($"Document {docId} not found or not deleted");
            }

            // Restore the document
            var update = Builders<DocumentModel>.Update
                .Set(d => d.isDeleted, false)
                .Unset(d => d.deletedBy)
                .Unset(d => d.deletedAt)
                .Set(d => d.modified, DateTime.UtcNow);

            var result = await _revDb.getCollection<DocumentModel>()
                .UpdateOneAsync(d => d.id == docId, update);

            if (!result.IsAcknowledged || result.ModifiedCount == 0)
            {
                return StatusCode(500, "Failed to restore document");
            }

            // Restore all pages in the document
            if (doc.pages != null)
            {
                foreach (var page in doc.pages)
                {
                    var pageUpdate = Builders<DocumentModel>.Update
                        .Set("pages.$[elem].isDeleted", false)
                        .Unset("pages.$[elem].deletedBy")
                        .Unset("pages.$[elem].deletedAt");

                    var arrayFilters = new[]
                    {
                        new BsonDocumentArrayFilterDefinition<BsonDocument>(
                            new BsonDocument("elem.id", page.id))
                    };

                    await _revDb.getCollection<DocumentModel>()
                        .UpdateManyAsync(
                            d => d.pages.Any(p => p.id == page.id),
                            pageUpdate,
                            new UpdateOptions { ArrayFilters = arrayFilters });
                }
            }

            // Re-index the document in Elasticsearch so it appears in search results
            await _mq.publishMessageAsync(new revElasticSearch.MQUpdateDocMessage(
                JobExecutionContext.createNew(), docId, _revDb.workspaceId,
                revElasticSearch.DocUpdatedType.upsert));

            _logger.LogInformation($"Document {docId} restored by admin {this.currentLoggedonUser()}");

            return Ok(new { message = "Document restored successfully", documentId = docId });
        }

        /// <summary>
        /// Permanently delete a soft-deleted document (admin only)
        /// This action cannot be undone
        /// </summary>
        [HttpDelete("documents/{docId}/permanent")]
        public async Task<IActionResult> PermanentlyDeleteDocument(string docId)
        {
            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                return Forbid("Only administrators can permanently delete items");
            }

            var doc = _revDb.getQueryable<DocumentModel>()
                .Where(d => d.id == docId && d.isDeleted)
                .SingleOrDefault();

            if (doc == null)
            {
                return NotFound($"Document {docId} not found or not soft-deleted");
            }

            // Mark pages for permanent deletion
            if (doc.pages != null)
            {
                await _pageDeleteService.SetPagesForDeletionAsync(
                    _revDb,
                    doc.pages.ToArray(),
                    DateTime.Now.AddHours(10),
                    this.currentLoggedonUser(),
                    docId);
            }

            // Permanently delete the document from database
            var count = await _revDb.DeleteAsync<DocumentModel>(new[] { docId });

            if (count != 1)
            {
                return StatusCode(500, $"Failed to permanently delete document {docId}");
            }

            _logger.LogWarning($"Document {docId} PERMANENTLY DELETED by admin {this.currentLoggedonUser()}");

            return Ok(new { message = "Document permanently deleted", documentId = docId });
        }

        /// <summary>
        /// Get all soft-deleted pages across all documents (admin only)
        /// </summary>
        [HttpGet("pages")]
        public IActionResult GetAllDeletedPages()
        {
            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                return Forbid("Only administrators can view deleted items");
            }

            // Get all documents (limit to recent ones) and filter in memory
            // We can't use .Any(p => p.isDeleted) in the MongoDB query because the field
            // might not exist on pages in existing documents
            var allDocs = _revDb.getQueryable<DocumentModel>()
                .Where(d => d.pages != null)
                .OrderByDescending(d => d.modified)
                .Take(1000)
                .ToList();

            // Filter in memory to find documents with deleted pages
            var docsWithDeletedPages = allDocs
                .Where(d => d.pages != null && d.pages.Any(p => p.isDeleted))
                .Take(100)
                .ToList();

            // Get project names
            var projectIds = docsWithDeletedPages.Select(d => d.projectId).Distinct().ToList();
            var projects = _revDb.getQueryable<ProjectModel>()
                .Where(p => projectIds.Contains(p.id))
                .ToList()
                .ToDictionary(p => p.id, p => p.name);

            var result = new List<object>();

            foreach (var doc in docsWithDeletedPages)
            {
                // Filter out original.* source files (pdf, tif, xlsx, etc.) - only show rendered pages
                var deletedPages = doc.pages.Where(p =>
                {
                    if (!p.isDeleted) return false;
                    var fileName = System.IO.Path.GetFileName(p.id);
                    return !fileName.StartsWith("original.", StringComparison.OrdinalIgnoreCase);
                }).ToList();
                var projectName = doc.projectId != null && projects.ContainsKey(doc.projectId) ? projects[doc.projectId] : "Unknown";

                foreach (var page in deletedPages)
                {
                    // Get the actual page number from pageOrders dictionary, fall back to orderNumber if not found
                    var actualPageNumber = doc.pageOrders != null && doc.pageOrders.ContainsKey(page.id)
                        ? doc.pageOrders[page.id]
                        : page.orderNumber;

                    result.Add(new
                    {
                        pageId = page.id,
                        documentId = doc.id,
                        documentTitle = GetDocumentTitle(doc),
                        projectId = doc.projectId,
                        projectName = projectName,
                        pageNumber = actualPageNumber,
                        deletedBy = page.deletedBy,
                        deletedAt = page.deletedAt,
                        width = page.width,
                        height = page.height,
                        size = page.size
                    });
                }
            }

            return Ok(result.OrderByDescending(p => ((dynamic)p).deletedAt).ToList());
        }

        /// <summary>
        /// Get all soft-deleted pages in a document (admin only)
        /// </summary>
        [HttpGet("documents/{docId}/pages")]
        public IActionResult GetDeletedPages(string docId)
        {
            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                return Forbid("Only administrators can view deleted items");
            }

            var doc = _revDb.getQueryable<DocumentModel>()
                .Where(d => d.id == docId)
                .SingleOrDefault();

            if (doc == null)
            {
                return NotFound($"Document {docId} not found");
            }

            // Filter out original.* source files (pdf, tif, xlsx, etc.) - only show rendered pages
            var deletedPages = doc.pages?
                .Where(p =>
                {
                    if (!p.isDeleted) return false;
                    var fileName = System.IO.Path.GetFileName(p.id);
                    return !fileName.StartsWith("original.", StringComparison.OrdinalIgnoreCase);
                })
                .OrderByDescending(p => p.deletedAt)
                .ToList();

            return Ok(deletedPages ?? new List<PageImageModel>());
        }

        /// <summary>
        /// Restore a soft-deleted page (admin only)
        /// </summary>
        [HttpPost("restorepage/{**pageId}")]
        public async Task<IActionResult> RestorePage([FromRoute] string pageId)
        {
            _logger.LogInformation($"[RESTORE PAGE] Starting restore of page {pageId}");

            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                _logger.LogWarning($"[RESTORE PAGE] Unauthorized attempt to restore page {pageId}");
                return Forbid("Only administrators can restore deleted items");
            }

            var pageUpdate = Builders<DocumentModel>.Update
                .Set("pages.$[elem].isDeleted", false)
                .Unset("pages.$[elem].deletedBy")
                .Unset("pages.$[elem].deletedAt");

            var arrayFilters = new[]
            {
                new BsonDocumentArrayFilterDefinition<BsonDocument>(
                    new BsonDocument("elem.id", pageId))
            };

            // Find the document containing this page first
            var docWithPage = await _revDb.getCollection<DocumentModel>()
                .Find(d => d.pages.Any(p => p.id == pageId && p.isDeleted))
                .FirstOrDefaultAsync();

            if (docWithPage == null)
            {
                return NotFound($"Page {pageId} not found or not deleted");
            }

            var targetPage = docWithPage.pages.FirstOrDefault(p => p.id == pageId);
            _logger.LogInformation($"[RESTORE PAGE] Found page in document {docWithPage.id}. Page.id={targetPage?.id}, Page.isDeleted={targetPage?.isDeleted}, Page.deletedBy={targetPage?.deletedBy}");

            // Get the index of the page in the array
            var pageIndex = Array.IndexOf(docWithPage.pages.ToArray(), targetPage);
            _logger.LogInformation($"[RESTORE PAGE] Page index in array: {pageIndex}");

            _logger.LogInformation($"[RESTORE PAGE] Updating page {pageId} in document...");

            // Use UpdateOne with the specific document ID and page index
            var updateResult = await _revDb.getCollection<DocumentModel>()
                .UpdateOneAsync(
                    d => d.id == docWithPage.id,
                    Builders<DocumentModel>.Update
                        .Set($"pages.{pageIndex}.isDeleted", false)
                        .Unset($"pages.{pageIndex}.deletedBy")
                        .Unset($"pages.{pageIndex}.deletedAt"));

            _logger.LogInformation($"[RESTORE PAGE] Update result - IsAcknowledged: {updateResult.IsAcknowledged}, MatchedCount: {updateResult.MatchedCount}, ModifiedCount: {updateResult.ModifiedCount}");

            if (!updateResult.IsAcknowledged || updateResult.ModifiedCount == 0)
            {
                _logger.LogWarning($"[RESTORE PAGE] Failed to restore page {pageId}");
                return NotFound($"Page {pageId} not found or not deleted");
            }

            // Re-index the document in Elasticsearch so the restored page appears in search results
            await _mq.publishMessageAsync(new revElasticSearch.MQUpdateDocMessage(
                JobExecutionContext.createNew(), docWithPage.id, _revDb.workspaceId,
                revElasticSearch.DocUpdatedType.upsert));

            _logger.LogInformation($"[RESTORE PAGE] Page {pageId} SUCCESSFULLY RESTORED by admin {this.currentLoggedonUser()} in document {docWithPage.id}");

            return Ok(new { message = "Page restored successfully", pageId, documentId = docWithPage.id });
        }

        /// <summary>
        /// Permanently delete a soft-deleted page (admin only)
        /// This action cannot be undone
        /// </summary>
        [HttpDelete("permanent/pages/{**pageId}")]
        public async Task<IActionResult> PermanentlyDeletePage(string pageId)
        {
            // Ensure user is admin
            var admin = this.ensureWorkspaceAdmin(_resolver);
            if (admin == null)
            {
                return Forbid("Only administrators can permanently delete items");
            }

            _logger.LogInformation($"[DELETE PAGE] Starting permanent deletion of page {pageId}");

            // Find the page
            var pagesInDocs = await _revDb.getCollection<DocumentModel>().findPageinDocsAsync(pageId);
            if (pagesInDocs == null || pagesInDocs.page == null || !pagesInDocs.page.isDeleted)
            {
                _logger.LogWarning($"[DELETE PAGE] Page {pageId} not found or not soft-deleted. pagesInDocs={pagesInDocs != null}, page={pagesInDocs?.page != null}, isDeleted={pagesInDocs?.page?.isDeleted}");
                return NotFound($"Page {pageId} not found or not soft-deleted");
            }

            _logger.LogInformation($"[DELETE PAGE] Found page {pageId}, proceeding with deletion");

            // Mark page for permanent deletion
            await _pageDeleteService.SetPagesForDeletionAsync(
                _revDb,
                new[] { pagesInDocs.page },
                DateTime.Now.AddHours(10),
                this.currentLoggedonUser(),
                null);

            _logger.LogInformation($"[DELETE PAGE] Removing page {pageId} from documents...");

            // Remove page from all documents
            var pullUpdate = Builders<DocumentModel>.Update.PullFilter(
                d => d.pages,
                Builders<PageImageModel>.Filter.Eq(p => p.id, pageId));

            var result = await _revDb.getCollection<DocumentModel>()
                .UpdateManyAsync(
                    d => d.pages.Any(p => p.id == pageId),
                    pullUpdate);

            _logger.LogInformation($"[DELETE PAGE] PullFilter result - IsAcknowledged: {result.IsAcknowledged}, MatchedCount: {result.MatchedCount}, ModifiedCount: {result.ModifiedCount}");

            if (!result.IsAcknowledged || result.ModifiedCount == 0)
            {
                _logger.LogError($"[DELETE PAGE] Failed to remove page {pageId} from documents. IsAcknowledged: {result.IsAcknowledged}, ModifiedCount: {result.ModifiedCount}");
                return StatusCode(500, "Failed to remove page from documents");
            }

            _logger.LogWarning($"[DELETE PAGE] Page {pageId} PERMANENTLY DELETED by admin {this.currentLoggedonUser()} (removed from {result.ModifiedCount} document(s))");

            return Ok(new { message = "Page permanently deleted", pageId });
        }
    }
}
