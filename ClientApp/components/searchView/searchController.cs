using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Amazon.Runtime.Internal.Transform;
using commonInterfaces;
using commonInterfaces.dbDataTypes;
using components.listPages;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using OpenSearch.Client;
using Newtonsoft.Json;
using reactBase;
using restUpdate;
using revElasticSearch;
using Utilities;
using workspaceResolver;

namespace components.searchView
{
    [Route("api/[controller]")]
    [Authorize]
    //[ServiceFilter(typeof(hasRevImages))]
    [TypeFilter(typeof(listPages.hasRevImages))]
    [ServiceFilter(typeof(billing.CheckBilling))]
    public class SearchController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly revElasticSearch.IRevEsClient _esClient;
        readonly IRevWorkspaceResolver _resolver;
        private readonly ILogger _logger;
        private readonly IDistributedCache _distributedCache;
        readonly IRevAudit _audit;


        public SearchController(commonInterfaces.IRevDatabase revDb,
            IRevWorkspaceResolver resolver,

            ILogger<SearchController> logger,
            IDistributedCache distributedCache,
            IRevAudit audit,
            revElasticSearch.IRevEsClient esHelper
            )
        {
            _audit = audit;
            _revDb = revDb;
            _esClient = esHelper;
            _logger = logger;
            _resolver = resolver;
            _distributedCache = distributedCache;

        }

        public static readonly string FULLTEXTDATAFIELD = "fullTextOcrDATA";

        /// <summary>
        /// Add or update a document
        /// </summary>
        readonly static string[] NON_INDEXFIELD;

        static SearchController()
        {
            NON_INDEXFIELD = (new[] { "projectId", "created", "modified", FULLTEXTDATAFIELD }).Concat(FullTextOCRMetaDataModel.OCRMETADATAFIELDS).ToArray();
        }




        [HttpGet("{docId}")]
        public async Task<DocumentModel> getDocument(string docId)
        {
            var revAdDb = _revDb as commonInterfaces.IRevAdvancedDb;

            var doc = (null == revAdDb) ?
                _revDb.getQueryable<DocumentModel>().Single(d => d.id == docId) :
                (await revAdDb.getDocumentsById(new[] { docId })).Single();

            this.ensureProjectAccess(_resolver, _revDb, _logger, new[] { doc.projectId }, PermissionType.view);


            return doc;
        }


        /// <summary>
        /// search for documents
        /// </summary>
        /// <param name="req"></param>
        /// <param name="pagesize"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<SearchResultsModel> search([FromBody] SearchRequestModel req,
            [FromQuery] int pagesize = 10, [FromQuery] int page = 0)
        {
            if (null == req)
                throw new ExceptionWithCode("search called with no requests");

            req.fullTextOCRTerm = convertToWildCard(req.fullTextOCRTerm);

            _logger.LogDebug($"Search called with object {JsonConvert.SerializeObject(req)}");


            if (req.selectedProjects.Count() == 0)
                throw new ExceptionWithCode("no repository for search");

            var restrictions = this.ensureProjectAccess(_resolver, _revDb, _logger,
                req.selectedProjects,
                PermissionType.view);


            var revAdDb = _revDb as commonInterfaces.IRevAdvancedDb;
            if (null == revAdDb)
                throw new NotImplementedException("IRevAdvancedDb no supported");


            _logger.LogTrace($"search started {DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff", CultureInfo.InvariantCulture)}");
            var SearchStarted = DateTime.Now;

            try
            {
                var checkedIdexexInitializedStr = $"indexesInitialized:{_resolver.revContext.esIndexName}";

                if (string.IsNullOrWhiteSpace(await _distributedCache.GetStringAsync(checkedIdexexInitializedStr)))
                {
                    //we need this cause if we search before we have put the first document ES returns a failure

                    _logger.LogDebug($"search: cheking if index initialized for {_resolver.revContext.esIndexName}");
                    if (!await hasDocumentsAsync())
                    {
                        _logger.LogDebug($"search: {_resolver.revContext.esIndexName} has 0 docs as per hasDocumentsAsync");
                        return new SearchResultsModel
                        {
                            totalCount = 0,
                            documents = new DocumentModel[] { }
                        };
                    }
                    else
                    {
                        _logger.LogDebug($"search: marking {_resolver.revContext.esIndexName} Initialzed");
                        await _distributedCache.SetStringAsync(checkedIdexexInitializedStr, "true");
                    }
                }

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to check if indexer intialized {ex}");
            }



            var found = await searchDocuments(
                _revDb.getQueryable<ProjectModel>().Where(p => req.selectedProjects.Contains(p.id)), restrictions,
                req, pagesize, page * pagesize);

            _logger.LogTrace($"esPart Completed {DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff", CultureInfo.InvariantCulture)}");

            if (found.documents.Count() > 0)
            {
                var foundIds = found.documents.Select(d => d.id).ToArray();


                //found.documents = (await revAdDb.getDocumentsById(foundIds)).ToArray();

                //mongodb serach doesn't respect sort order so we have to sort here
                var docsFromMongo = _revDb.getQueryable<DocumentModel>()
                    .Where(d => foundIds.Contains(d.id))
                    .ToDictionary(k => k.id, v => v);

                found.documents = foundIds
                    .Select(id => docsFromMongo.ContainsKey(id) ? docsFromMongo[id] : null)
                    .Where(d => null != d)
                    .ToArray();

                _logger.LogTrace($"found from mongodb {DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff", CultureInfo.InvariantCulture)}");

                /*
				var unProcessedIds = found.documents.Where(d => d.hasUnprocessedpages).Select(d => d.id).ToArray();
				if (unProcessedIds.Count() > 0)
				{
					
				}

				
                foreach (var d in found.documents)
                {
                    d.pages = fromdb[d.id].pages;
                    d.integrations = fromdb[d.id].integrations;
					d.hasUnprocessedpages = 
                }
				*/
            }

            _logger.LogTrace($"search completed {DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff", CultureInfo.InvariantCulture)}");


            _audit.Log(AuditAction.searchExecuted, this.currentLoggedonUser(), string.Join(", ", req.selectedProjects), _revDb.dbName,
                new Dictionary<string, string> { { "durationInMS", (DateTime.Now - SearchStarted).ToString() } });


            return found;
        }

        #region ElasticSearch

        /// <summary>
        /// 
        /// </summary>
        /// <param name="req"></param>
        /// <returns>map of pageIds and hits</returns>
        [HttpPost("textinpages")]
        public async Task<Dictionary<string, TextinPagesResponceModel[]>> pagesWithTextInDocument([FromBody] TextinPagesRequestModel req)
        {
            if (null == req)
                throw new ArgumentNullException(nameof(req));
            if (string.IsNullOrEmpty(req.docId))
                throw new ArgumentNullException(nameof(req.docId));
            if (string.IsNullOrEmpty(req.ocrTextTerm))
                throw new ArgumentNullException(nameof(req.ocrTextTerm));

            req.ocrTextTerm = convertToWildCard(req.ocrTextTerm);


            var response = await _esClient.nestClient.SearchAsync<FullTextOCRRecordTypeModel>(s => s
                .Index(_resolver.revContext.esIndexName)
                .Query(q => q
                    .Bool(b => b
                        .Must(
                            bm => bm.ParentId(pid => pid
                                  .Type("paragraph")
                                  .Id(req.docId)
                                ),
                            bm => bm.Wildcard(m => m
                                        .Field(mf => mf.revPageOCRText)
                                        .Value(req.ocrTextTerm)
                                        )
                            /*
							bm => bm.MatchPhrase(m=>m
								.Field(mf=>mf.revPageOCRText)
								.Query(req.ocrTextTerm)
								)
							*/
                            )
                        )
                    )
                .Highlight(h => h
                    .Fields(h => h
                        .Field(f => f.revPageOCRText)
                        )
                    )
            );

            if (0 == response.Hits.LongCount())
            {
                _logger.LogDebug("0 hits for search term");
                return null;
            }

            var byfiles = (from h in response.Hits
                           group h by h.Source.revPageOCRpageId into g
                           select new { pageId = g.Key, hits = g.ToArray() })
                          .ToArray();

            var orgFiles = _revDb.getCollection<OriginalFileModel>();

            var allOrginalFileIds = byfiles.Select(f => f.pageId).ToArray();
            var orgFileMap = (await orgFiles.Find(f => allOrginalFileIds.Contains(f.pageId)).ToListAsync())
                .ToDictionary(k => k.pageId, v => v);


            var groupedHits = byfiles.SelectMany(h =>
            {
                if (!orgFileMap.ContainsKey(h.pageId))
                {
                    _logger.LogWarning($"pageID {h.pageId} not found in originalFile collection");
                    return null;
                }

                var byPageNumbers = (from s in h.hits
                                     group s by s.Source.revPageOCRMeta.pageNo into g
                                     select new { pageNo = g.Key, hits = g.ToArray() })
                                    .ToArray();

                var maxPageNo = byPageNumbers.Max(p => p.pageNo);

                if (null == orgFileMap[h.pageId].convertedPages)
                {
                    _logger.LogDebug($"originalFile : {h.pageId}:convertedPage is NULL");

                    if (maxPageNo > 0)
                    {
                        //this might be possible if the pages have not been processed yet
                        _logger.LogDebug($"page {h.pageId} no converted pages but has more then 1 page in OCR");
                        return null;
                    }

                    var ret = new
                    {
                        page = orgFileMap[h.pageId].originalImage,
                        hits = h.hits.Select(hit => new TextinPagesResponceModel
                        {
                            boundingBox = hit.Source.revPageOCRMeta.boundingBox,
                            //highlights = hit.Highlights.Single().Value.Highlights.ToArray()
                            highlights = hit.Highlight.Values.SelectMany(v => v).ToArray()
                        }).ToArray()
                    };

                    return new[] { ret };
                }
                else
                {
                    if (maxPageNo >= orgFileMap[h.pageId].convertedPages.Length)
                    {
                        _logger.LogCritical($"data inconsistency: pageId:{h.pageId}, convertedpages length:{orgFileMap[h.pageId].convertedPages.Length}, maxPages:{maxPageNo}");
                        return null;
                    }

                    return byPageNumbers.Select(pg =>
                    {
                        try
                        {
                            return new
                            {
                                page = orgFileMap[h.pageId].convertedPages[pg.pageNo],
                                hits = pg.hits.Select(hit =>
                                {
                                    if (null == hit.Source)
                                    {
                                        //var g = 0;
                                    }

                                    return new TextinPagesResponceModel
                                    {
                                        boundingBox = hit.Source.revPageOCRMeta.boundingBox.ToArray(),
                                        //highlights = hit.Highlights.Single().Value.Highlights.ToArray()
                                        highlights = hit.Highlight.Values.SelectMany(v => v).ToArray()
                                    };

                                }).ToArray()
                            };
                        }
                        catch (Exception ex)
                        {
                            throw ex;
                        }

                    }).ToArray();

                }

            })
                .Where(h => null != h)
                .ToDictionary(k => k.page.id, v => v.hits)
                ;


            return groupedHits;

        }

        readonly string FIELD_RESTRICTION_USER_NAME = @"FIELD_RESTRICTION_USER_NAME";

        /// <summary>
        /// Return the top scored highlights for a full text search in a list of documents
        /// </summary>
        /// <param name="docId"></param>
        /// <param name="fullTextTerm"></param>
        /// <returns>map of docIds and HightLight Strings</returns>
        [HttpPost("textinDocList")]
        public async Task<Dictionary<string, HighLightsInDocumentsModel>> textHighLightsInDocuments([FromBody] FullTextHighLightsReqModel req)
        {
            if (string.IsNullOrWhiteSpace(req?.fullTextTerm))
                throw new ExceptionWithCode($"{nameof(req.fullTextTerm)} is required");

            if (null == req?.docIds)
                throw new ExceptionWithCode($"{nameof(req.docIds)} is required");

            req.fullTextTerm = convertToWildCard(req.fullTextTerm);

            var response = await _esClient.nestClient.SearchAsync<FullTextOCRRecordTypeModel>(s => s
                .Index(_resolver.revContext.esIndexName)
                .Query(q => q
                    .Bool(b => b
                        .MinimumShouldMatch(1)
                        .Should(req.docIds.Select(docId =>
                        {
                            QueryContainer p(QueryContainerDescriptor<FullTextOCRRecordTypeModel> bm) => bm.ParentId(pid => pid
                                                                    .Type("paragraph")
                                                                    .Id(docId)
                                                                );
                            return (Func<QueryContainerDescriptor<FullTextOCRRecordTypeModel>, QueryContainer>)p;
                        }))
                        .Must(
                                bm => bm.Wildcard(m => m
                                        .Field(mf => mf.revPageOCRText)
                                        .Value(req.fullTextTerm)
                                        )
                            /*
                                bm => bm.MatchPhrase(m => m
                                    .Field(mf => mf.revPageOCRText)
                                    .Query(req.fullTextTerm)
                                    //.Fuzziness(Nest.Fuzziness.Auto)
                                    )
                            */
                            )
                        )
                    )
                .Highlight(h => h
                    .Fields(h => h
                        .Field(f => f.revPageOCRText)
                        )
                    )
            );

            var byDocId = (from h in response.Hits
                           group h by h.Routing into g
                           //select new { docId = g.Key, topHit = g.OrderByDescending(h=>h.Score).First().Highlights.Single().Value.Highlights.ToArray() })
                           select new { docId = g.Key, topHit = g.OrderByDescending(h => h.Score).First().Highlight.Values.SelectMany(v => v).ToArray() })

                          .ToDictionary(k => k.docId, v => new HighLightsInDocumentsModel { highlights = v.topHit });

            return byDocId;

        }

        [HttpGet("searchDocuments")]
        public async Task<SearchResultsModel> searchDocuments(
            IEnumerable<ProjectModel> includedProjects,
            ProjectAccessPermission restrictions,
            SearchRequestModel req,
            int pagesize, int startingFromRecord)
        {

            /*
    {
              
    "query": {
        "bool" : {
                  
            "must" : [{
                        "match": {
                            "customername" : {
                                "query": "Rahul",
                                "fuzziness" : "AUTO"
                            }
                        }
                    },{ 
                        "match": {
                            "vname" : {
                                "query": "royal",
                                "fuzziness" : "AUTO"
                            }
                        }
                    }],

                  
            "filter":[{
                    "term" : { "division" : "tech" }
                  },{
                    "term" : { "grade" : "high" }
                  },{
                    "range": { "date": { "gte": "2014-01-01" } }
                  },{
                    "range": { "price": { "lte": 29.99, "gte" : 20 } }
                  }],
                  

            "should" : [
                    { "term" : { "tag" : "wow" } },
                    { "term" : { "tag" : "elasticsearch" } },
					{ "bool" : { 
						"must" : [
							{ "term" : {"productID" : "JODL-X-1937-#pV7"}}, 
							{ "term" : {"price" : 30}} 
						]
						}
					}
                  ],
            
            "minimum_should_match" : 1,
            "boost" : 1.0
            }
        }
    }
             * 
             */

            var SearchQuery = "";
            try
            {
                if (req.selectedProjects.Count() == 0)
                    throw new ExceptionWithCode("no repository for search");

                var allProjectsFieldTypes = includedProjects.SelectMany(p =>
                    p.fields.Select(f => new { f.displayName, f.fieldType, f.defaultSearchProps, f.userlistValues })).ToArray();

                // Divine: This is to restrict users from seeing others documents

                var userId = this.currentLoggedonUser();

                var userCollection = _revDb.getCollection<WorkspaceUserModel>();
                var dbUser = userCollection.Find(u => u.userId == userId).SingleOrDefault();

                if (null != dbUser)
                {
                    var allSelectFields = includedProjects.SelectMany(p =>
                       p.fields.Select(f => new { f.displayName, f.fieldType, f.defaultSearchProps, f.userlistValues, f.documentRestriction }))
                       .Where(x => x.fieldType == ProjectFieldTypeModel.user_list)
                       .ToArray();

                    var loggedInUserFound = allSelectFields.Where(x => x.userlistValues.Contains(dbUser.fullName)).FirstOrDefault();

                    if (null != loggedInUserFound)
                    {
                        if (loggedInUserFound.documentRestriction)
                        {
                            if (null == req.fields)
                            {
                                req.fields = new Dictionary<string, string[]>();
                            }
                            if (!req.fields.ContainsKey(loggedInUserFound.displayName))
                                req.fields.Add(loggedInUserFound.displayName, new[] { dbUser.fullName });
                        }
                    }
                }

                allProjectsFieldTypes = allProjectsFieldTypes.Concat(new[]
                {
                    new {displayName ="created",fieldType = ProjectFieldTypeModel.date, defaultSearchProps = (FieldSearchPropsModel)null, userlistValues= new string[]{ } },
                    new {displayName ="modified",fieldType = ProjectFieldTypeModel.date, defaultSearchProps = (FieldSearchPropsModel)null, userlistValues = new string[]{ } }

                }).ToArray();


                var should = req.selectedProjects.Select(id =>
                {
                    if (null != restrictions.projectRestrictions
                            && restrictions.projectRestrictions.ContainsKey(id)
                            && null != restrictions.projectRestrictions[id]
                            )
                    {

                        var restrictedTo = restrictions.projectRestrictions[id].Select(r =>
                        {
                            if (null == r.Value || r.Value.Count() == 0)
                            {
                                ///this term is restricted to ANY

                                if (null == req.fields
                                        || !req.fields.ContainsKey(r.Key)
                                        || req.fields[r.Key].Count() == 0
                                        || string.IsNullOrWhiteSpace(req.fields[r.Key][0]))
                                    throw new ExceptionWithCode($"index {r.Key} is required to search");

                                return null;
                            }

                            var indexField = r.Key;
                            var fieldType = allProjectsFieldTypes.FirstOrDefault(f => f.displayName == r.Key);

                            if (null == fieldType)
                            {
                                _logger.LogWarning($"null fieldType for field display name {r.Key}");
                                return null;
                            }
                            var userId = this.currentLoggedonUser();


                            var userCollection = _revDb.getCollection<WorkspaceUserModel>();
                            var dbUser = userCollection.Find(u => u.userId == userId).SingleOrDefault();

                            if (null == dbUser)
                            {
                                throw new ExceptionWithCode($"{userId} not found");

                            }

                            var userDisplayName = dbUser?.invitationEmail?.emailTo;
                            if (string.IsNullOrWhiteSpace(userDisplayName))
                            {
                                throw new ExceptionWithCode($"email not set");
                            }


                            if (null != r.Value && r.Value.Count() > 1 && r.Value.Contains(userDisplayName))
                            {
                                _logger.LogDebug($"field {r.Key} restricted to FIELD_RESTRICTION_USER_NAME");

                                if (fieldType.fieldType != ProjectFieldTypeModel.user_list)
                                    throw new ExceptionWithCode($"Index {r.Key} must be custom list field to be used as a user restricted field");

                                if (null == fieldType.userlistValues || !fieldType.userlistValues.Contains(userDisplayName))
                                {
                                    throw new ExceptionWithCode($"Index {r.Key} does not contain the user {userDisplayName}");
                                }

                                //we have to put safeguards to match usernames and this filed somehow

                                return new { term = ESClient.KVToDictionary(indexField, userDisplayName) } as object;
                            }

                            if (fieldType.fieldType == ProjectFieldTypeModel.text)
                                indexField = $"{indexField}.rawLowercase";

                            return new { term = ESClient.KVToDictionary(indexField, r.Value) } as object;
                        })
                        .Where(r => null != r)
                        .ToArray();


                        if (restrictedTo.Count() > 0)
                        {
                            return new
                            {
                                @bool = new
                                {
                                    must = restrictedTo.Concat(new[] { new { term = new { projectId = id } } }).ToArray()
                                }
                            };
                        }
                    }



                    return new { term = new { projectId = id } } as object;


                }).ToArray();


                var fieldsWithTypes = (req.fields ?? new Dictionary<string, string[]>()).Select(reqField =>
                {
                    var theField = allProjectsFieldTypes.FirstOrDefault(f => f.displayName == reqField.Key);
                    if (null == theField)
                    {
                        _logger.LogWarning($"invalid search field {reqField.Key}");
                        return null;
                    }


                    return new { reqField, theField.fieldType, theField.defaultSearchProps };
                })
                 .Where(f => null != f)
                 .ToArray();

                var must = fieldsWithTypes
                    .Where(f => f.fieldType == ProjectFieldTypeModel.text)
                    .Select(f =>
                    {
                        if (null == f.reqField.Value || f.reqField.Value.Count() == 0 || string.IsNullOrWhiteSpace(f.reqField.Value[0]))
                            return null;

                        /*
                        var serchProp = new FieldSearchPropsModel
                        {
                            useRegEx = @"0?<SEARCH_TERM/>"
                        };
                        */

                        var serchProp = f.defaultSearchProps;
                        if (null == serchProp)
                        {
                            serchProp = new FieldSearchPropsModel();
                        }


                        if (null == serchProp.searchType)
                        {
                            ESTextSearchTypeModel sTYpeTmp;
                            if (f.reqField.Value.Count() > 1 && Enum.TryParse<ESTextSearchTypeModel>(f.reqField.Value[1], out sTYpeTmp))
                            {
                                serchProp.searchType = ESTextSearchTypeModel.prefix;

                                _logger.LogDebug($"using search type for req field {f.reqField.Key} {serchProp.searchType}");

                            }
                            else
                            {
                                serchProp.searchType = ESTextSearchTypeModel.prefix;
                                _logger.LogDebug($"request has no type for filed {f.reqField.Key}");
                            }

                        }
                        else
                        {
                            _logger.LogDebug($"using default search field type {serchProp.searchType} for field {f.reqField.Key}");
                        }




                        var serachField = $"{f.reqField.Key}.rawLowercase";
                        var serachValue = new Dictionary<string, object> { { "query", f.reqField.Value[0] } };
                        var matchType = "match";
                        switch (serchProp.searchType)
                        {
                            case ESTextSearchTypeModel.fuzzy:
                                serachField = f.reqField.Key;
                                serachValue["fuzziness"] = "AUTO";
                                break;
                            case ESTextSearchTypeModel.prefix:
                                {
                                    matchType = "prefix";
                                    serachValue = new Dictionary<string, object> { { "value", f.reqField.Value[0] } };

                                    if (f.reqField.Value[0].Contains('*'))
                                    {
                                        matchType = "wildcard";
                                    }
                                }
                                break;
                            case ESTextSearchTypeModel.typeahead:
                                serachField = $"{f.reqField.Key}.typeahead";
                                break;
                            case ESTextSearchTypeModel.fullmatch:
                                {
                                    if (!string.IsNullOrWhiteSpace(serchProp.useRegEx))
                                    {
                                        matchType = "regexp";
                                        var regex = serchProp.useRegEx.Replace(@"<SEARCH_TERM/>", f.reqField.Value[0]);

                                        serachValue = new Dictionary<string, object> { { "value", regex } };

                                    }
                                }
                                break;
                        }

                        var matchFV = ESClient.KVToDictionary(serachField, (object)serachValue);
                        return ESClient.KVToDictionary(matchType, matchFV);


                    })
                    .Where(f => null != f)
                    .ToArray();


                //we should NOT include OCR child documents as part of this results
                var must_not = new
                {
                    term = ESClient.KVToDictionary(FullTextOCRMetaDataModel.REV_PAGE_OCR_JOIN_FIELD, "paragraph")
                };

                if (!string.IsNullOrWhiteSpace(req.fullTextOCRTerm))
                {
                    must_not = null;

                    req.fullTextOCRTerm = convertToWildCard(req.fullTextOCRTerm);

                    var childDef = ESClient.KVToDictionary("type", (object)"paragraph");

                    childDef["query"] = new
                    {
                        wildcard = ESClient.KVToDictionary(FullTextOCRMetaDataModel.REV_PAGE_OCR_TEXT_FIELD, new
                        { value = req.fullTextOCRTerm })


                        /*
						match_phrase = ESClient.KVToDictionary(FullTextOCRMetaDataModel.REV_PAGE_OCR_TEXT_FIELD, new
						{
							query = req.fullTextOCRTerm,
							//fuzziness = "AUTO"
						})
						*/
                    };


                    var docONy = ESClient.KVToDictionary("has_child", childDef);

                    must = must.Concat(new[] { docONy }).ToArray();

                }


                if (must.Count() == 0)
                    must = null;

                var termFilter = fieldsWithTypes
                    .Where(f => f.fieldType == ProjectFieldTypeModel.user_list || f.fieldType == ProjectFieldTypeModel.externalIntegration)
                    .Select(f =>
                    {
                        if (null == f.reqField.Value || f.reqField.Value.Count() == 0 || string.IsNullOrWhiteSpace(f.reqField.Value[0]))
                            return null;

                        var indexName = f.reqField.Key;
                        if (f.fieldType == ProjectFieldTypeModel.externalIntegration)
                            indexName = $"{indexName}.rawLowercase";

                        //return ESClient.KVToDictionary(indexName, f.reqField.Value[0]);

                        //var term = new { key = indexName, value = f.reqField.Value[0] };

                        return new { term = ESClient.KVToDictionary(indexName, f.reqField.Value[0]) };
                    })
                    .Where(f => null != f)
                    .ToArray();

                var rangeFilter = fieldsWithTypes
                    .Where(f => !(new[] { ProjectFieldTypeModel.user_list, ProjectFieldTypeModel.text, ProjectFieldTypeModel.externalIntegration }).Contains(f.fieldType))
                    .Select(f =>
                    {
                        if (null == f.reqField.Value || f.reqField.Value.Count() == 0)
                            return null;

                        var gte = string.IsNullOrWhiteSpace(f.reqField.Value[0]) ? null : f.reqField.Value[0];
                        var lte = f.reqField.Value.Count() > 1 ? f.reqField.Value[1] : null;
                        if (string.IsNullOrWhiteSpace(lte))
                            lte = null;

                        if (String.IsNullOrWhiteSpace(gte) && String.IsNullOrWhiteSpace(lte))
                            return null;

                        var range = new { key = f.reqField.Key, value = new { lte, gte } };

                        return new { range = (new[] { range }).ToDictionary(k => k.key, v => v.value) };

                    })
                    .Where(f => null != f)
                    .ToArray();

                var filter = termFilter.Select(f => (object)f).Concat(rangeFilter).ToArray();

                if (filter.Count() == 0)
                    filter = null;



                //ensure sort fields exists
                if (null == req.sortBy)
                    req.sortBy = new Dictionary<string, SearchReqSortModel>();

                if (req.sortBy.Count() == 0)
                {
                    req.sortBy.Add("modified", new SearchReqSortModel { desc = true });
                }

                var sort = req.sortBy.Select(kv =>
                {
                    var field = allProjectsFieldTypes.FirstOrDefault(f => f.displayName == kv.Key);
                    if (null == field)
                        return null;

                    var displayName = field.displayName;

                    if (ProjectFieldTypeModel.text == field.fieldType)
                    {
                        displayName = $"{field.displayName}.rawLowercase";
                    }

                    return new { displayName, kv.Value };
                })
                .Where(f => null != f)
                .Select(f => ESClient.KVToDictionary(f.displayName, new
                {
                    order = f.Value.desc ? "desc" : "asc",
                    missing = f.Value.desc ? "_last" : "_first"
                }))
                .ToArray();


                //in case of failure we want to log the query
                SearchQuery = ESClient.ESJsonfromObject(new
                {
                    from = startingFromRecord,
                    size = pagesize,
                    sort,
                    query = new
                    {
                        @bool = new
                        {
                            must_not = must_not,
                            must = must,
                            filter = filter,
                            should = should,
                            minimum_should_match = 1,
                            boost = 1.0
                        }
                    }
                });

                var response = (await _esClient.lowlevelCient.SearchAsync<OpenSearch.Net.StringResponse>(
                    _resolver.revContext.esIndexName, OpenSearch.Net.PostData.String(SearchQuery))).Body;


                var results = JsonConvert.DeserializeAnonymousType(response, new
                {
                    hits = new
                    {
                        total = new { value = 0 },
                        hits = new[]
                        {
                        new
                        {
                            _id="",_source= new Dictionary<string,object>()
                        }
                    }
                    }
                });

                return new SearchResultsModel
                {
                    totalCount = results.hits.total.value,
                    documents = results.hits.hits.Select(h =>
                    {
                        return new DocumentModel
                        {
                            id = h._id,
                            projectId = h._source["projectId"].ToString(),
                            created = DateTime.Parse(h._source["created"].ToString()),
                            modified = DateTime.Parse(h._source["modified"].ToString()),
                            indexes = h._source.Where(kv => !NON_INDEXFIELD.Contains(kv.Key)).ToDictionary(k => k.Key, v => v.Value as object)
                        };
                    }).ToArray()
                };
            }
            catch (Exception ex)
            {
                throw new Exception($"ES Search failed : {SearchQuery}", ex);
            }

        }

        [HttpGet("hasDocuments")]
        public async Task<bool> hasDocumentsAsync()
        {
            //var response = (await _esClient.lowlevelCient.IndicesStatsAsync<OpenSearch.Net.StringResponse>(_resolver.revContext.esIndexName)).Body;
            var response = (await _esClient.lowlevelCient.Indices.StatsAsync<OpenSearch.Net.StringResponse>(_resolver.revContext.esIndexName)).Body;

            var results = JsonConvert.DeserializeAnonymousType(response, new
            {
                _all = new
                {
                    total = new
                    {
                        docs = new { count = 0 }
                    }
                }
            });

            return results._all.total.docs.count > 0;
        }
        #endregion

        private static string convertToWildCard(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return input;

            input = input.Replace("*", " ");
            input = Regex.Replace(input, @"\s+", " ");
            input = input.Trim();
            input = input.Replace(" ", "*");
            input = "*" + input + "*";
            return input;
        }
    }
}
