using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using restUpdate;
using RevStorage;
using Utilities;
using MongoDB.Driver;
using revMQAbstractions;
using Microsoft.AspNetCore.Http;
using Pipelines.Sockets.Unofficial.Arenas;

namespace components.forms
{
    [Route("api/[controller]")]
    [Authorize]
    [TypeFilter(typeof(listPages.hasRevImages))]
    public class AutomationsController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly IRevStorageService _storage;

        private readonly ILogger _logger;
        readonly ICacheProvider _cache;
        readonly workspace.IWorkspaceResolver _resolver;
        readonly IRevMQBus _mq;

        readonly workspace.IWaitforJob _pageadoneWaiter;


        public AutomationsController(
            ICacheProvider cache,
            IRevMQBus mq,
            workspace.IWaitforJob pageadoneWaiter,
            workspace.IWorkspaceResolver respolver,
            commonInterfaces.IRevDatabase revDb, IRevStorageService storage,
            ILogger<AutomationsController> logger)
        {
            _cache = cache;
            _revDb = revDb;
            _storage = storage;
            _logger = logger;



            _mq = mq;

            _resolver = respolver;

            _pageadoneWaiter = pageadoneWaiter;

        }


        #region saveForm
        [HttpGet()]
        public AutomationTaskModel[] ListofForms()
        {
            var forms = _revDb.getQueryable<AutomationTaskModel>().ToArray();
            return forms;
        }

        [HttpDelete("{automationId}")]
        public async Task removeAutomationTask(string automationId)
        {
            this.ensureWorkspaceAdmin(_resolver);

            var collection = _revDb.getCollection<AutomationTaskModel>();

            var done = await collection.DeleteOneAsync(a => a.id == automationId);

            if (done.DeletedCount != 1)
            {
                throw new ExceptionWithCode("Failed to remove automation", innerException: new Exception($"DeletedCount = {done.DeletedCount}"));
            }
        }

        [HttpPost]
        public async Task<AutomationTaskModel> createOrUpdateAutomationTask([FromBody] AutomationTaskModel req)
        {
            this.ensureWorkspaceAdmin(_resolver);

            // Validate and sanitize name
            if (string.IsNullOrWhiteSpace(req.name))
                throw new ExceptionWithCode("Task name is required", System.Net.HttpStatusCode.BadRequest);

            req.name = req.name.Trim();

            if (req.name.Length < 4)
                throw new ExceptionWithCode("Task name must be at least 4 characters", System.Net.HttpStatusCode.BadRequest);

            if (req.name.Length > 100)
                throw new ExceptionWithCode("Task name must not exceed 100 characters", System.Net.HttpStatusCode.BadRequest);

            // Sanitize HTML/script tags to prevent XSS
            req.name = System.Net.WebUtility.HtmlEncode(req.name);

            // Validate zones if present
            if (null != req.zones && req.zones.Count() > 0)
            {
                var breakField = req.zones.FirstOrDefault(z => z.isBreakField);
                if (null == breakField)
                    throw new ExceptionWithCode("form has no break field");

                // Validate zone structure
                foreach (var zone in req.zones)
                {
                    if (zone.x < 0 || zone.y < 0 || zone.width <= 0 || zone.height <= 0)
                        throw new ExceptionWithCode("Zone dimensions must be positive numbers", System.Net.HttpStatusCode.BadRequest);
                }
            }

            if (null == req.zones || req.zones.Length == 0)
            {
                _logger.LogDebug($"Task {req.name} has no zones");
                if (string.IsNullOrWhiteSpace(req.scriptCode))
                    throw new ExceptionWithCode("script code is required");

                // Basic script validation - check for syntax errors
                if (req.scriptCode.Length > 1000000) // 1MB limit
                    throw new ExceptionWithCode("Script code is too large", System.Net.HttpStatusCode.BadRequest);
            }

            if (!String.IsNullOrEmpty(req.id))
            {
                if (null != _revDb.getQueryable<AutomationTaskModel>().FirstOrDefault(c => c.id != req.id && c.name == req.name))
                {
                    throw new ExceptionWithCode($"the task {req.name} already exists", System.Net.HttpStatusCode.BadRequest);
                }
            }

            if (null != req.pages)
            {
                req.pages = await Task.WhenAll(req.pages.Select(async (p, i) =>
                {
                    var holderId = components.listDocuments.DocumentUpdater.extractHolderIdfromPagePath(p.path);
                    if (holderId == req.id)
                        return p;

                    var newPageFolder = $"{req.contentFolder}/{Guid.NewGuid()}";
                    var newPageID = $"{newPageFolder}/{Path.GetFileName(p.id)}";

                    try
                    {
                        using (var tmp = _cache.createCacheStream())
                        using (var istm = await _storage.getImageStreamAsync(p.id))
                        {
                            await istm.CopyToAsync(tmp);
                            tmp.Seek(0, SeekOrigin.Begin);
                            await _storage.SaveStreamAsync(newPageID, tmp);
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError(ex, $"Failed to copy page image {p.id} to {newPageID}");
                        throw new ExceptionWithCode($"Failed to copy page image: {ex.Message}", System.Net.HttpStatusCode.InternalServerError,
                            innerException: ex);
                    }

                    return new PageImageModel
                    {
                        id = newPageID,
                        height = p.height,
                        width = p.width,
                        orderNumber = i
                    };
                }));
            }

            await _revDb.AddorUpdateAsync(req);

            return req;
        }
        #endregion

        #region OCR

        /*
		[HttpGet("recognize/{escapedPageId}")]
		public async Task recognizeFields(string escapedPageId)
		{
			if (string.IsNullOrWhiteSpace(escapedPageId))
				throw new ArgumentNullException(nameof(escapedPageId));

			var unescaped = Uri.UnescapeDataString(escapedPageId);

			await _mq.publishMessageAsync((new MQOCRRequest(JobExecutionContext.createNew(), _revDb.workspaceId, OCRActions.startOCR)
			{
				pageId = unescaped,
				doNotCheckForQueue = true
			}), new revWorkflow.Workflows.ZoneOCRFlow.ZoneData
			{
				pageId = unescaped
			});
		}
		*/

        static readonly string RECOGNOZER_FIELDID = "forms_recognizerField";

        private void ResampleZones(in PageImageModel? samplePage, in PageImageModel currentPage, ref OCRZoneModel[] zones)
        {
            if (samplePage != null && samplePage.width > 0 && samplePage.height > 0)
            {
                float sampleSizeNormalizationXMultiplier = 1f / (float)samplePage.width * (float)currentPage.width;
                float sampleSizeNormalizationYMultiplier = 1f / (float)samplePage.height * (float)currentPage.height;

                _logger.LogDebug($"ResampleZones: Sample page {samplePage.width}x{samplePage.height}, Current page {currentPage.width}x{currentPage.height}");
                _logger.LogDebug($"ResampleZones: Multipliers X={sampleSizeNormalizationXMultiplier}, Y={sampleSizeNormalizationYMultiplier}");

                foreach (var zone in zones)
                {
                    var origX = zone.x;
                    var origY = zone.y;
                    var origW = zone.width;
                    var origH = zone.height;

                    zone.x = zone.x * sampleSizeNormalizationXMultiplier;
                    zone.y = zone.y * sampleSizeNormalizationYMultiplier;
                    zone.width = zone.width * sampleSizeNormalizationXMultiplier;
                    zone.height = zone.height * sampleSizeNormalizationYMultiplier;

                    _logger.LogDebug($"ResampleZones: Zone {zone.id} transformed from ({origX},{origY},{origW}x{origH}) to ({zone.x},{zone.y},{zone.width}x{zone.height})");
                }
            }
            else
            {
                _logger.LogWarning($"ResampleZones: NO RESAMPLING - samplePage is null or has zero dimensions");
            }
        }


        [HttpPost("run/{formId}")]
        public async Task<AutomationRunResultModel> ExecuteFormAsync(string formId, [FromBody] PageImageModel[] pages)
        {
            if (null == pages || pages.Length == 0)
            {
                _logger.LogDebug($"ExecuteFormAsync called ith no pages");

                return new AutomationRunResultModel
                {
                    docs = new DocumentModel[] { },
                    detected = null,
                    pagesLeft = null
                };
            }


            var form = _revDb.getQueryable<AutomationTaskModel>()
                .Where(f => f.id == formId)
                .Single();

            var hasRecognizer = null != form.zones.Where(z => z.id == "forms_recognizerField").SingleOrDefault();

            var breakFieldIds = form.zones.Where(z => z.isBreakField).Select(z => z.id).ToArray();
            if (breakFieldIds.Count() == 0)
                throw new ExceptionWithCode($"form {formId} has no break fields");

            _logger.LogTrace($"ExecuteFormAsync: {formId} - detecting ");


            var detectedList = await Task.WhenAll(pages.Select(async (page, i) =>
            {
                try
                {
                    var detectZones = form.zones.Select(zone => new OCRZoneModel
                    {
                        id = zone.id,
                        clientReference = zone.clientReference,
                        x = zone.x,
                        y = zone.y,
                        width = zone.width,
                        height = zone.height,
                        regex = zone.regex,
                        type = zone.type,
                        isBreakField = zone.isBreakField,
                        ocrTolerance = zone.ocrTolerance,
                        recognizerReference = zone.recognizerReference
                    }).ToArray();

                    ResampleZones(form?.pages?.FirstOrDefault(), page, ref detectZones);

                    var detectJobId = await DetectZoneStartAsync(new DetectReqModel { pageId = page.id, zones = detectZones });

                    var detected = await DetectZoneEndAsync(detectJobId);

                    var zones = detected
                                .Where(d => !string.IsNullOrWhiteSpace(d.computed))
                                .ToDictionary(k => k.id, v => (object)v.computed);
                    var isFormPage = (!hasRecognizer) || zones.ContainsKey(RECOGNOZER_FIELDID);
                    if (zones.ContainsKey(RECOGNOZER_FIELDID))
                        zones.Remove(RECOGNOZER_FIELDID);

                    return new
                    {
                        page,
                        isFormPage,
                        zones,
                        detected,
                    };
                }
                catch (Exception ex)
                {
                    _logger.LogError($"ExecuteFormAsync: failed detect page {i}, id : {page.id}", ex);
                    throw;
                }



            }));

            _logger.LogTrace($"ExecuteFormAsync: {formId} - finding docs");
            var docs = new List<DocumentModel>();
            DocumentModel currentDoc = null;
            var pagesLeft = new List<PageImageModel>();
            foreach (var detected in detectedList)
            {
                if (!detected.isFormPage)
                {
                    _logger.LogTrace($"ExecuteFormAsync: {formId} - empty recognizer field skipping");
                    pagesLeft.Add(detected.page);
                    continue;
                }

                var isBreak = null == currentDoc || null != breakFieldIds.Where(fid =>
                {
                    if (currentDoc.indexes.ContainsKey(fid)
                       && detected.zones.ContainsKey(fid)
                       && currentDoc.indexes[fid].ToString() != detected.zones[fid].ToString())
                    {
                        return true;
                    }

                    return false;

                })
                .FirstOrDefault();

                if (isBreak)
                {
                    currentDoc = new DocumentModel
                    {
                        projectId = form.projectId,
                        indexes = detected.zones,
                        pages = new List<PageImageModel>(),
                    };
                    docs.Add(currentDoc);
                }


                ((List<PageImageModel>)(currentDoc.pages)).Add(detected.page);

            }

            return new AutomationRunResultModel
            {
                docs = docs.ToArray(),
                detected = detectedList.ToDictionary(k => k.page.id, v => v.detected),
                pagesLeft = pagesLeft.ToArray(),
            };

        }

        [HttpPost("runall/{projectId}")]
        public async Task<AutomationRunResultModel> ExecuteAllForFormAsync(string projectId, [FromBody] PageImageModel[] pages)
        {
            _logger.LogInformation($"ExecuteAllForFormAsync called for project [{projectId}].");

            if (null == pages || pages.Length == 0)
            {
                _logger.LogDebug($"ExecuteAllForFormAsync called with no pages");

                return new AutomationRunResultModel
                {
                    docs = new DocumentModel[] { },
                    detected = null,
                    pagesLeft = null
                };
            }

            var forms = _revDb.getQueryable<AutomationTaskModel>()
                .Where(f => f.projectId == projectId)
                .ToArray();

            // Filter out automations with no zones
            var validForms = forms.Where(f => f.zones != null && f.zones.Length > 0).ToArray();

            foreach (var form in forms.Where(f => f.zones == null || f.zones.Length == 0))
            {
                _logger.LogWarning($"Skipping automation [{form.name}] - no zones defined");
            }

            if (validForms.Length == 0)
            {
                _logger.LogInformation($"No valid automations to run for project [{projectId}]");
                return new AutomationRunResultModel
                {
                    docs = new DocumentModel[] { },
                    detected = null,
                    pagesLeft = pages
                };
            }

            _logger.LogInformation($"Running {validForms.Length} automations in parallel for project [{projectId}]");

            // Run all automations in parallel against all pages
            var allFormResults = await Task.WhenAll(validForms.Select(async (form, formIndex) =>
            {
                _logger.LogInformation($"ExecuteAllForFormAsync running automation [{form.name}] (index {formIndex})");

                var hasRecognizer = null != form.zones.Where(z => z.id == "forms_recognizerField").SingleOrDefault();

                var breakFieldIds = form.zones.Where(z => z.isBreakField).Select(z => z.id).ToArray();
                if (breakFieldIds.Count() == 0)
                    throw new ExceptionWithCode($"form {form.id} has no break fields");

                _logger.LogInformation($"ExecuteFormAsync: {form.id} - detecting zones for {pages.Length} pages");

                // Process all pages for this automation in parallel
                var detectedList = await Task.WhenAll(pages.Select(async (page, i) =>
                {
                    try
                    {
                        var detectZones = form.zones.Select(zone => new OCRZoneModel
                        {
                            id = zone.id,
                            clientReference = zone.clientReference,
                            x = zone.x,
                            y = zone.y,
                            width = zone.width,
                            height = zone.height,
                            regex = zone.regex,
                            type = zone.type,
                            isBreakField = zone.isBreakField,
                            ocrTolerance = zone.ocrTolerance,
                            recognizerReference = zone.recognizerReference
                        }).ToArray();

                        ResampleZones(form?.pages?.FirstOrDefault(), page, ref detectZones);

                        var detectJobId = await DetectZoneStartAsync(new DetectReqModel { pageId = page.id, zones = detectZones });

                        var detected = await DetectZoneEndAsync(detectJobId);

                        var zones = detected
                                    .Where(d => !string.IsNullOrWhiteSpace(d.computed))
                                    .ToDictionary(k => k.id, v => (object)v.computed);
                        var isFormPage = (!hasRecognizer) || zones.ContainsKey(RECOGNOZER_FIELDID);
                        if (zones.ContainsKey(RECOGNOZER_FIELDID))
                            zones.Remove(RECOGNOZER_FIELDID);

                        return new
                        {
                            page,
                            isFormPage,
                            zones,
                            detected,
                        };
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError($"ExecuteFormAsync: automation {form.name}, failed detect page {i}, id : {page.id}", ex);
                        throw;
                    }
                }));

                _logger.LogTrace($"ExecuteFormAsync: {form.id} - building documents");
                var docs = new List<DocumentModel>();
                DocumentModel currentDoc = null;

                foreach (var detected in detectedList)
                {
                    if (!detected.isFormPage)
                    {
                        _logger.LogTrace($"ExecuteFormAsync: {form.id} - page {detected.page.id} doesn't match recognizer field");
                        continue;
                    }

                    var isBreak = null == currentDoc || null != breakFieldIds.Where(fid =>
                    {
                        if (currentDoc.indexes.ContainsKey(fid)
                           && detected.zones.ContainsKey(fid)
                           && currentDoc.indexes[fid].ToString() != detected.zones[fid].ToString())
                        {
                            return true;
                        }
                        return false;
                    })
                    .FirstOrDefault();

                    if (isBreak)
                    {
                        currentDoc = new DocumentModel
                        {
                            projectId = form.projectId,
                            indexes = detected.zones,
                            pages = new List<PageImageModel>(),
                        };
                        docs.Add(currentDoc);
                    }

                    ((List<PageImageModel>)(currentDoc.pages)).Add(detected.page);
                }

                _logger.LogInformation($"Automation [{form.name}] generated {docs.Count} documents from {detectedList.Count(d => d.isFormPage)} matching pages");

                return new
                {
                    formIndex,
                    form,
                    docs,
                    matchedPages = detectedList.Where(d => d.isFormPage).Select(d => d.page.id).ToHashSet()
                };
            }));

            // Assign pages to first matching automation (by original order)
            var pageAssignments = new Dictionary<string, int>(); // pageId -> formIndex
            foreach (var page in pages)
            {
                for (int i = 0; i < allFormResults.Length; i++)
                {
                    if (allFormResults[i].matchedPages.Contains(page.id))
                    {
                        pageAssignments[page.id] = i;
                        break;
                    }
                }
            }

            // Build final document list and unmatched pages
            var docsGenerated = new List<DocumentModel>();
            var matchedPageIds = new HashSet<string>();

            foreach (var formResult in allFormResults)
            {
                foreach (var doc in formResult.docs)
                {
                    // Filter document pages to only include those assigned to this automation
                    var assignedPages = ((List<PageImageModel>)doc.pages)
                        .Where(p => pageAssignments.TryGetValue(p.id, out var assignedFormIndex) && assignedFormIndex == formResult.formIndex)
                        .ToList();

                    if (assignedPages.Count > 0)
                    {
                        doc.pages = assignedPages;
                        docsGenerated.Add(doc);
                        foreach (var p in assignedPages)
                        {
                            matchedPageIds.Add(p.id);
                        }
                    }
                }
            }

            var remainingPages = pages.Where(p => !matchedPageIds.Contains(p.id)).ToArray();

            _logger.LogInformation($"ExecuteAllForFormAsync completed: {docsGenerated.Count} documents generated, {remainingPages.Length} pages unmatched");

            return new AutomationRunResultModel
            {
                docs = docsGenerated.ToArray(),
                pagesLeft = remainingPages,
            };
        }


        [HttpPost("regex")]
        public DetectReqResultModel applyRegex([FromBody] RegexReqModel req)
        {
            if (null == req)
                throw new ArgumentNullException(nameof(req));

            return req.apply();
        }

        [HttpPost("detectStart")]
        public async Task<string> DetectZoneStartAsync([FromBody] DetectReqModel req)
        {
            if (null == req)
                throw new ArgumentNullException(nameof(req));

            _logger.LogDebug($"DetectZoneStartAsync: pageId={req.pageId}, zones count={req.zones?.Length ?? 0}");

            return await _pageadoneWaiter.CreateJob<DetectReqModel, workspace.DetectReqJobDone>(this.currentLoggedonUser(), req);
        }


        [HttpGet("detectEnd/{jobId}")]
        public async Task<DetectReqResultModel[]> DetectZoneEndAsync(string jobId)
        {

            var result = await _pageadoneWaiter.waitForJobDone<DetectReqModel, workspace.DetectReqJobDone>(this.currentLoggedonUser(), jobId);
            if (null == result)
            {
                _logger.LogWarning($"zone detect result is null");
                return new DetectReqResultModel[] { };

            }
            _logger.LogDebug($"zone detection result get {JsonConvert.SerializeObject(result)}");
            return result.detected;
        }

        #endregion


        #region ScriptTemplate
        //readonly static string _SCRIPTTEMPLATEEP = @"s3.amazonaws.com/downloads.labizbille.com/revScriptTemplates/";
        [HttpGet("searchScriptTemplates")]
        public Task<ScriptTemplateModel[]> SearchScriptTemplates([FromQuery] bool includeDev)
        {
            //var ret = await _downloader.downloadObjectAsync($"{_SCRIPTTEMPLATEEP}list.json", new ScriptTemplateModel[] { });
            //return ret;
            throw new NotImplementedException();

        }
        #endregion
    }
}
