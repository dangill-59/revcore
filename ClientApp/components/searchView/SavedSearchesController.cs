using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
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
using Nest;
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

    public class SavedSearchesController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly ILogger _logger;

        public SavedSearchesController(commonInterfaces.IRevDatabase revDb,
            ILogger<SavedSearchesController> logger)
        {
            _logger = logger;
            _revDb = revDb;
        }

        readonly static string SAVED_SEARCHES_COLLECTION = @"savedSearches";

        [HttpGet]
        public async Task<SavedSearchModel[]> getmySearches()
        {
            var userId = this.currentLoggedonUser();

            var collection = _revDb.db.GetCollection<SavedSearchModel>(SAVED_SEARCHES_COLLECTION);

            var mySearches = await collection.Find(s => s.userIds.Contains(userId)).ToListAsync();


            return mySearches.ToArray();

        }
    }
}
