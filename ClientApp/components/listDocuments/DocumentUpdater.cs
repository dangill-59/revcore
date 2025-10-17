using commonInterfaces;
using commonInterfaces.dbDataTypes;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using reactBase;
using RevStorage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Utilities;

namespace components.listDocuments
{
    /// <summary>
    /// contains logic to update a document
    /// </summary>
    public class DocumentUpdater
    {
        readonly IRevDatabase _revDb;

        readonly ILogger _logger;
        readonly string[] allwritableFieldNames;
        readonly string[] requiredFieldNames;
        readonly ProjectFieldModel[] projectFields;

        readonly external.IIntegrationsService _intgService;

        readonly ProjectAccessPermission restrictions;

        public IMongoCollection<PageHolderModel> pageHolderCollection { get; }

        public string theProjectId { get; }

        readonly IRevStorageService _storage;

        public DocumentUpdater(ILogger logger,
            external.IIntegrationsService intgService,
            ProjectAccessPermission restrictions,
            IRevStorageService storage,
            IRevDatabase revDb,
            string projectId)
        {
            _logger = logger;
            _intgService = intgService;
            this.restrictions = restrictions;
            _storage = storage;

            _revDb = revDb;

            var projects = _revDb.getCollection<ProjectModel>();

            theProjectId = projectId;
            var currentProject = projects.Find(p => p.id == theProjectId).Single();
            projectFields = currentProject.fields.ToArray();

            requiredFieldNames = projectFields.Where(f => f.required && !f.SystemDefined).Select(f => f.displayName).ToArray();
            allwritableFieldNames = projectFields.Where(f => !f.SystemDefined).Select(f => f.displayName).ToArray();

            pageHolderCollection = _revDb.getCollection<PageHolderModel>();

        }

        readonly static System.Text.RegularExpressions.Regex _pageHolderPattern =
    new System.Text.RegularExpressions.Regex(@"(?:holder=)(?<TokenValue>[^&]+)");
        public static string extractHolderIdfromPagePath(string path)
        {
            var match = _pageHolderPattern.Match(path);
            return match.Success ? match.Groups["TokenValue"].Value : null;
        }


        public async Task<PagesToMove[]> getPagesToUpdate(DocumentModel doc)
        {
            //now we are adding pages for new documents
            if (!String.IsNullOrEmpty(doc.id) || null == doc.pages)
            {
                _logger.LogDebug("not a new document no pages to do");
                return null;
            }

            var pagesAndExistingHolders = doc.pages.Select(page => new
            {
                holderId = extractHolderIdfromPagePath(page.path),
                page
            })
            .Where(h => null != h.holderId)
            .ToArray();

            //for bulk import the pages are already there so we just add them to unprocessed pages
            var unProcessedPages = doc.pages
                .Where(p => !string.IsNullOrEmpty(p.path) && p.path.StartsWith("copy://"))
                .ToArray();

            foreach (var p in unProcessedPages)
            {
                p.id = (await _storage.MediaExistsAsync(p.path.Replace("copy://", ""))).key;
                p.pageType = PageImageTypeModel.unprocessed;
            }

            if (unProcessedPages.Count() > 0)
            {
                doc.hasUnprocessedpages = true;
            }

            var newPages = pagesAndExistingHolders.Where(h => h.holderId != doc.id).ToArray();

            return newPages.GroupBy(k => k.holderId, v => v.page).Select(g => new PagesToMove { existingDocId = g.Key, pages = g.ToArray() }).ToArray();
        }

        public class PagesToMove { public string existingDocId { get; set; } public PageImageModel[] pages { get; set; } }

        public async Task<IDictionary<String, object>> getNewIndexes(DocumentModel inputDoc)
        {
            if (String.IsNullOrEmpty(inputDoc.id) && (null == inputDoc.indexes || inputDoc.indexes.Count() == 0))
                throw new ExceptionWithCode("cannot save document with no indexes");

            var existingDoc = String.IsNullOrEmpty(inputDoc.id) ? null :
                await pageHolderCollection.OfType<DocumentModel>().Find(d => d.id == inputDoc.id).SingleAsync();

            var doc = inputDoc;
            if (null != existingDoc)
            {
                if (string.IsNullOrWhiteSpace(doc.projectId))
                    doc.projectId = existingDoc.projectId;


                if (existingDoc.projectId != doc.projectId)
                    throw new ExceptionWithCode("cannot change document repository");

                doc = existingDoc;
                if (null != inputDoc.indexes)
                {
                    doc.indexes = inputDoc.indexes;
                }
                doc.isPlaceHolder = inputDoc.isPlaceHolder;
            }

            if (null == doc.indexes)
                throw new ExceptionWithCode("indexes are missing", System.Net.HttpStatusCode.BadRequest);

            foreach (var i in doc.indexes.ToArray())
            {
                if (!allwritableFieldNames.Contains(i.Key))
                {
                    _logger.LogInformation($"field {i.Key} is invalid and being removed from");
                    doc.indexes.Remove(i.Key);
                }

            }

            var missingRequired = requiredFieldNames.Where(name => !doc.indexes.ContainsKey(name));
            if (missingRequired.Count() > 0)
                throw new ExceptionWithCode($"the index{(missingRequired.Count() > 1 ? "es" : "")} {String.Join(" ,", missingRequired)} {(missingRequired.Count() > 1 ? "are" : "is")} missing");

            foreach (var field in projectFields)
            {
                if (!doc.indexes.ContainsKey(field.displayName))
                    continue;

                var fieldValue = (doc.indexes[field.displayName] ?? "").ToString();
                if (string.IsNullOrWhiteSpace(fieldValue))
                {
                    doc.indexes[field.displayName] = null;
                    continue;
                }

                switch (field.fieldType)
                {
                    case ProjectFieldTypeModel.currency:
                        {
                            decimal val;
                            if (!decimal.TryParse(fieldValue, out val))
                                throw new ExceptionWithCode($"index {field.displayName} can only be a decimal number");
                            doc.indexes[field.displayName] = val.ToString();
                            break;
                        }
                    case ProjectFieldTypeModel.date:
                    case ProjectFieldTypeModel.timestamp:
                        {
                            DateTime val;
                            if (!DateTime.TryParse(fieldValue, out val))
                                throw new ExceptionWithCode($"index {field.displayName} can only be a date value");
                            doc.indexes[field.displayName] = val.Date.ToString("o");
                            break;
                        }
                    case ProjectFieldTypeModel.number:
                        {
                            int val;
                            if (!int.TryParse(fieldValue, out val))
                                throw new ExceptionWithCode($"index {field.displayName} can only be a number");
                            doc.indexes[field.displayName] = val.ToString();
                            break;
                        }
                    case ProjectFieldTypeModel.boolean:
                        {
                            bool val;
                            if (!bool.TryParse(fieldValue, out val))
                                throw new ExceptionWithCode($"index {field.displayName} can only be a number");
                            doc.indexes[field.displayName] = val.ToString();
                            break;
                        }
                    case ProjectFieldTypeModel.user_list:
                        {

                            if (!field.userlistValues.Contains(fieldValue))
                                throw new ExceptionWithCode($"value: {fieldValue} for index {field.displayName} is not one of available choices");


                            break;
                        }
                    case ProjectFieldTypeModel.externalIntegration:
                        {
                            if (String.IsNullOrWhiteSpace(fieldValue))
                            {
                                if (null != doc.integrations && doc.integrations.ContainsKey(field.displayName))
                                    doc.integrations.Remove(field.displayName);
                            }
                            else
                            {
                                if (null == doc.integrations)
                                    doc.integrations = new Dictionary<string, ExternalIndexModel>();

                                if (!field.integrationOptions.ContainsKey("lookupType"))
                                    throw new ExceptionWithCode($"External integrated index {field.displayName} must contain lookupType");

                                if (doc.integrations.ContainsKey(field.displayName)
                                    && null != doc.integrations[field.displayName]
                                    && doc.integrations[field.displayName].externalId == fieldValue)
                                {
                                    _logger.LogDebug($"integration {field.displayName}:{doc.integrations[field.displayName].externalId} unchanged");
                                }
                                else
                                {
                                    var found = _intgService.getHelper(field.integrationOptions["lookupType"])
                                        .search(restrictions.userId, field.integrationOptions["exactParam"], fieldValue).Result;
                                    if (found.Count() != 1)
                                    {
                                        throw new ExceptionWithCode($"{field.displayName}:{fieldValue} matched {found.Count()} records in {field.integrationOptions["lookupType"]}");
                                    }

                                    doc.integrations[field.displayName] = found[0];

                                }


                                //save each integration update
                                doc.indexes[field.displayName] = doc.integrations[field.displayName].externalId;


                            }
                        }
                        break;

                }
            }

            return doc.indexes;


        }
    }
}
