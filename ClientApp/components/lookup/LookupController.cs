using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using Elasticsearch.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using revElasticSearch;
using Utilities;
using workspaceResolver;

namespace components.lookup
{
    [Route("api/[controller]")]
    [Authorize]
    public class LookupController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;

        private readonly ILogger _logger;
        readonly external.IIntegrationsService _intgService;
        readonly revElasticSearch.IRevEsClient _esClient;
        readonly IRevWorkspaceResolver _resolver;

        public LookupController(commonInterfaces.IRevDatabase revDb,
            external.IIntegrationsService intgService,
            IRevWorkspaceResolver resolver,
            ILogger<LookupController> logger,
            revElasticSearch.IRevEsClient esClient,
            IConfiguration config)
        {
            _revDb = revDb;

            _logger = logger;
            _intgService = intgService;
            _resolver = resolver;
            _esClient = esClient;
        }

        /// <summary>
        /// Updates the entire lookup index
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost]
        public Task<string> AddOrUpdateLookup([FromBody] LookupValueModel req)
        {

            throw new NotImplementedException();

            /*
			var existing = _revDb.getQueryable<LookupValueModel>().SingleOrDefault(l=>l.lookupParameter == req.lookupParameter);
			if (null != existing)
			{
				if (!string.IsNullOrWhiteSpace(req.id)  && req.id != existing.id) { 
						throw new ExceptionWithCode("cannot change id of lookup");
				}
				req.id = existing.id;
				req.lookupParameter = existing.lookupParameter;
			}


			await _esHelper.initLookupTypeAsync(req.lookupParameter);

			var ret = await _revDb.AddorUpdateAsync(req);
			await _esHelper.addLookupValuesAsync(req.lookupParameter,ret.id,  req.values);
			return ret.id;
			*/
        }

        /// <summary>
        /// add values to exiting lookup
        /// </summary>
        /// <param name="lookupParameter"></param>
        /// <param name="newValues"></param>
        /// <returns></returns>
        [HttpPost("{lookupParameter}")]
        public async Task<string> AddValuestoLookup(string lookupParameter, [FromBody] Dictionary<string, string> newValues)
        {
            var existing = _revDb.getQueryable<LookupValueModel>().Single(l => l.lookupParameter == lookupParameter);

            if (null == existing.values)
                existing.values = new Dictionary<string, string>();

            foreach (var v in newValues)
                existing.values[v.Key] = v.Value;

            await addLookupValuesAsync(existing.lookupParameter, existing.id, newValues);
            var ret = await _revDb.AddorUpdateAsync(existing);
            return ret.id;
        }

        string lookupNameFromParameter(string lookupParameter) { return $"lookup_{lookupParameter.Replace(' ', '_')}"; }

        async Task addLookupValuesAsync(string lookupParameter, string lookupId, Dictionary<string, string> values)
        {
            var lookupName = lookupNameFromParameter(lookupParameter);

            /*{ "index" : { "_index" : "test", "_type" : "_doc", "_id" : "1" } }
				{ "field1" : "value1" }
			*/
            var djson = values.Select(v =>
            {
                var metadata = new
                {
                    index = new { _index = _resolver.revContext.esIndexName, _type = "pageholders", _id = $"{lookupId}_{v.Key}" }
                };

                var source = new Dictionary<string, string> { { lookupName, v.Value } };

                return new object[] { metadata, source };
            });

            var respose = (await _esClient.lowlevelCient.BulkAsync<StringResponse>(PostData.String(ESClient.ESJsonfromObject(djson.SelectMany(s => s))))).Body;


            var g = JsonConvert.DeserializeAnonymousType(respose, new { errors = true });

            if (g.errors)
                throw new ExceptionWithCode("failed to index values", System.Net.HttpStatusCode.InternalServerError);

        }


        async Task<TypeaheadResultsModel> searchLookup(string type, string lookupParameter,
            string req,
            string fuzziness = "AUTO")
        {
            if (string.IsNullOrWhiteSpace(type))
            {
                throw new ExceptionWithCode("searchLookup :type is required");
            }

            if (string.IsNullOrWhiteSpace(req))
                return new TypeaheadResultsModel();

            var unescpedParameter = WebUtility.UrlDecode(lookupParameter);

            switch (type)
            {
                case "param":
                    return await searchLookup(unescpedParameter, req, fuzziness);
                case "field":
                    if (req.Length < 2)
                        return new TypeaheadResultsModel();

                    return await typeAheadSuggest(_revDb.getQueryable<ProjectModel>(), unescpedParameter, req);

                default:
                    _logger.LogDebug($"searchLookup: trying external lookup for {type}");

                    if (req.Length < 2)
                        return new TypeaheadResultsModel();

                    var intHelper = _intgService.getHelper(type);
                    var ret = await intHelper.search(this.currentLoggedonUser(), lookupParameter, req);

                    return new TypeaheadResultsModel
                    {
                        hits = ret.Select(h => new TypeaheadResultRowModel
                        {
                            suggested = h.displayValue,
                            id = h.externalId
                        }).ToArray()
                    };

            }




        }

        async Task<components.lookup.TypeaheadResultsModel> findMatchingTokensTask(IEnumerable<ProjectModel> includedProjects,
    string field, string input, bool fuzzy = false)
        {
            /*
"query": {
    "bool": {
      "must": [
        {
          "match": {
            "Customer.typeahead": {
              "query": "mel",
              "fuzziness": "AUTO"
            }
          }
        }
      ],
      "should": [
        {
          "term": {
            "projectId": "5b9c11efebd4f23e302f81e2"
          }
        }
      ],
      "minimum_should_match": 1,
      "boost": 1
    }
  }
			 */

            if (input.Length < 2)
                throw new ExceptionWithCode("typeahead lookups needs at least 2 characters");

            var allProjectsFieldTypes = includedProjects.SelectMany(p =>
                p.fields.Select(f => new { f.displayName, f.fieldType, projectName = p.name }));

            var ourField = allProjectsFieldTypes.Where(f => f.displayName == field).FirstOrDefault();
            if (null == ourField)
                throw new ExceptionWithCode($"index {field} not found");

            if (ProjectFieldTypeModel.text != ourField.fieldType)
                throw new ExceptionWithCode($"index {field} is not a text field. TypeAhead suggester required text field");

            var matchValue = ESClient.KVToDictionary("query", input);
            if (fuzzy)
                matchValue["fuzziness"] = "AUTO";

            var must = new
            {
                match = ESClient.KVToDictionary($"{field}.typeahead", matchValue)
            };

            var highlight = new
            {
                number_of_fragments = 0,
                fields = ESClient.KVToDictionary($"{field}.typeahead", new { })
            };


            var response = (await _esClient.lowlevelCient.SearchAsync<StringResponse>(
                _resolver.revContext.esIndexName, PostData.String(ESClient.ESJsonfromObject(new
                {
                    size = 0,
                    aggs = new
                    {
                        found = new { terms = new { field = $"{field}.raw", size = 500 } }
                    },

                    query = new
                    {
                        @bool = new
                        {
                            must = must,
                        },
                    },
                    //highlight

                })))).Body;

            var results = JsonConvert.DeserializeAnonymousType(response, new
            {
                aggregations = new
                {
                    found = new
                    {
                        buckets = new[] { new { key = "", doc_count = 0 } }
                    }
                }
            });

            return new components.lookup.TypeaheadResultsModel
            {
                total = results.aggregations.found.buckets.Count(),
                hits = results.aggregations.found.buckets.Select(hit => new components.lookup.TypeaheadResultRowModel
                {
                    isFuzzy = false,
                    suggested = hit.key,
                    id = hit.key
                    //	withHighLight = hit.highlight.First().Value[0]

                }
                ).ToArray()
            };
        }


        async Task<components.lookup.TypeaheadResultsModel> typeAheadSuggest(IEnumerable<ProjectModel> includedProjects,
            string field, string input)
        {
            var ret = await findMatchingTokensTask(includedProjects, field, input);
            if (ret.total < 5)
            {
                ret = await findMatchingTokensTask(includedProjects, field, input, true);
            }

            return ret;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">param OR field </param>
        /// <param name="lookupParameter"></param>
        /// <param name="req"></param>
        /// <param name="fuzziness"></param>
        /// <returns></returns>
        [HttpGet("{type}/{lookupParameter}")]
        public async Task<TypeaheadResultsModel> doLookup(string type, string lookupParameter,
            [FromQuery] string req,
            [FromQuery] string fuzziness = "AUTO")
        {
            if (string.IsNullOrWhiteSpace(type))
            {
                throw new ExceptionWithCode("searchLookup :type is required");
            }

            if (string.IsNullOrWhiteSpace(req))
                return new TypeaheadResultsModel();

            var unescpedParameter = WebUtility.UrlDecode(lookupParameter);

            switch (type)
            {
                case "param":
                    return await searchLookup(unescpedParameter, req, fuzziness);
                case "field":
                    if (req.Length < 2)
                        return new TypeaheadResultsModel();

                    return await typeAheadSuggest(_revDb.getQueryable<ProjectModel>(), unescpedParameter, req);

                default:
                    _logger.LogDebug($"searchLookup: trying external lookup for {type}");

                    if (req.Length < 2)
                        return new TypeaheadResultsModel();

                    var intHelper = _intgService.getHelper(type);
                    var ret = await intHelper.search(this.currentLoggedonUser(), lookupParameter, req);

                    return new TypeaheadResultsModel
                    {
                        hits = ret.Select(h => new TypeaheadResultRowModel
                        {
                            suggested = h.displayValue,
                            id = h.externalId
                        }).ToArray()
                    };

            }




        }
    }
}
