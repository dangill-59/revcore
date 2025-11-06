using Microsoft.AspNetCore.Mvc;
using commonInterfaces;
using commonInterfaces.dbDataTypes;
using MongoDB.Driver;
using System.Threading.Tasks;
using System.Linq;

namespace revCore2site.Controllers
{
    /// <summary>
    /// Health check controller for monitoring system status
    /// </summary>
    [Route("api/[controller]")]
    public class HealthController : Controller
    {
        private readonly IRevDatabase _revDb;

        public HealthController(IRevDatabase revDb)
        {
            _revDb = revDb;
        }

        /// <summary>
        /// Get Elasticsearch indexing status
        /// Returns count of catalogued vs uncatalogued documents
        /// </summary>
        /// <returns>
        /// {
        ///   "uncatalogued": 0,
        ///   "catalogued": 150,
        ///   "total": 150,
        ///   "percentComplete": 100,
        ///   "healthy": true
        /// }
        /// </returns>
        [HttpGet("indexing")]
        public async Task<IActionResult> GetIndexingStatus()
        {
            var collection = _revDb.getCollection<DocumentModel>();

            var uncatalogued = await collection.CountDocumentsAsync(d => d.catalogued == false);
            var total = await collection.CountDocumentsAsync(d => true);

            var status = new
            {
                uncatalogued = uncatalogued,
                catalogued = total - uncatalogued,
                total = total,
                percentComplete = total > 0 ? (double)(total - uncatalogued) / total * 100 : 100,
                healthy = uncatalogued < 10,
                workspaceId = _revDb.workspaceId,
                databaseName = _revDb.dbName
            };

            return Ok(status);
        }

        /// <summary>
        /// Get overall system health
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetHealth()
        {
            var collection = _revDb.getCollection<DocumentModel>();

            try
            {
                // Test database connectivity
                var count = await collection.CountDocumentsAsync(d => true);

                return Ok(new
                {
                    status = "healthy",
                    database = "connected",
                    totalDocuments = count,
                    workspaceId = _revDb.workspaceId
                });
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, new
                {
                    status = "unhealthy",
                    database = "disconnected",
                    error = ex.Message
                });
            }
        }
    }
}
