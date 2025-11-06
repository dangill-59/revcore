using commonInterfaces.dbDataTypes;
using commonInterfaces.interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using restUpdate;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace revCore2site.ClientApp.components.audit
{
    /// <summary>
    /// Controller for querying audit logs and activity history
    /// </summary>
    [Authorize]
    [Route("api/[controller]")]
    public class AuditController : Controller
    {
        private readonly IAuditLogService _auditLogService;
        private readonly ILogger<AuditController> _logger;
        private readonly commonInterfaces.IRevDatabase _revDb;

        public AuditController(
            IAuditLogService auditLogService,
            ILogger<AuditController> logger,
            commonInterfaces.IRevDatabase revDb)
        {
            _auditLogService = auditLogService;
            _logger = logger;
            _revDb = revDb;
        }

        /// <summary>
        /// Query audit logs with filtering and pagination
        /// </summary>
        [HttpPost("query")]
        public async Task<IActionResult> QueryLogs([FromBody] AuditLogQueryModel query)
        {
            try
            {
                // Filter by current workspace
                var workspaceId = _revDb.dbName;
                _logger.LogInformation($"AUDIT QUERY: WorkspaceId={workspaceId}, Page={query.page}, PageSize={query.pageSize}");

                if (string.IsNullOrEmpty(workspaceId))
                {
                    _logger.LogWarning("AUDIT QUERY: Workspace ID is null or empty");
                    return BadRequest(new { error = "Workspace ID not found" });
                }

                // Add workspace filter to query
                query.workspaceId = workspaceId;

                var result = await _auditLogService.QueryLogsAsync(query);
                _logger.LogInformation($"AUDIT QUERY: Found {result.totalCount} logs, returning {result.logs.Count} in page {result.page}");

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to query audit logs");
                return StatusCode(500, new { error = "Failed to query audit logs", message = ex.Message });
            }
        }

        /// <summary>
        /// Get audit history for a specific document
        /// </summary>
        [HttpGet("document/{documentId}")]
        public async Task<IActionResult> GetDocumentHistory(string documentId, [FromQuery] int limit = 100)
        {
            try
            {
                var history = await _auditLogService.GetDocumentHistoryAsync(documentId, limit);
                return Ok(history);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Failed to get document history for {documentId}");
                return StatusCode(500, new { error = "Failed to get document history", message = ex.Message });
            }
        }

        /// <summary>
        /// Get activity history for a specific user
        /// </summary>
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserActivity(string userId, [FromQuery] int limit = 100)
        {
            try
            {
                var activity = await _auditLogService.GetUserActivityAsync(userId, limit);
                return Ok(activity);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Failed to get user activity for {userId}");
                return StatusCode(500, new { error = "Failed to get user activity", message = ex.Message });
            }
        }

        /// <summary>
        /// Get recent activity for the current workspace
        /// </summary>
        [HttpGet("recent")]
        public async Task<IActionResult> GetRecentActivity([FromQuery] int limit = 50)
        {
            try
            {
                var workspaceId = _revDb.dbName;
                if (string.IsNullOrEmpty(workspaceId))
                {
                    return BadRequest(new { error = "Workspace ID not found" });
                }

                var activity = await _auditLogService.GetRecentActivityAsync(workspaceId, limit);
                return Ok(activity);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to get recent activity");
                return StatusCode(500, new { error = "Failed to get recent activity", message = ex.Message });
            }
        }

        /// <summary>
        /// Get audit event types enum for filtering
        /// </summary>
        [HttpGet("event-types")]
        public IActionResult GetEventTypes()
        {
            try
            {
                var eventTypes = Enum.GetValues(typeof(AuditEventType))
                    .Cast<AuditEventType>()
                    .Select(e => new
                    {
                        value = (int)e,
                        name = e.ToString(),
                        display = e.ToString().Replace("_", " ")
                    })
                    .ToList();

                return Ok(eventTypes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to get event types");
                return StatusCode(500, new { error = "Failed to get event types", message = ex.Message });
            }
        }

        /// <summary>
        /// Export audit logs to CSV format
        /// </summary>
        [HttpPost("export/csv")]
        public async Task<IActionResult> ExportToCsv([FromBody] AuditLogQueryModel query)
        {
            try
            {
                // Query logs without pagination limit for export
                query.pageSize = 10000; // Max export limit
                var result = await _auditLogService.QueryLogsAsync(query);

                var csv = new StringBuilder();

                // CSV header
                csv.AppendLine("Timestamp,Event Type,User,Email,Description,Target,Target Type,Project,Status,IP Address,Error Message");

                // CSV rows
                foreach (var log in result.logs)
                {
                    csv.AppendLine($"\"{log.timestamp:yyyy-MM-dd HH:mm:ss}\",\"{log.eventType}\",\"{log.userName}\",\"{log.userEmail}\",\"{log.description?.Replace("\"", "\"\"")}\",\"{log.targetName}\",\"{log.targetType}\",\"{log.projectName}\",\"{(log.success ? "Success" : "Failed")}\",\"{log.ipAddress}\",\"{log.errorMessage?.Replace("\"", "\"\"")}\"");
                }

                var bytes = Encoding.UTF8.GetBytes(csv.ToString());
                var fileName = $"audit_log_{DateTime.UtcNow:yyyyMMdd_HHmmss}.csv";

                return File(bytes, "text/csv", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to export audit logs to CSV");
                return StatusCode(500, new { error = "Failed to export audit logs", message = ex.Message });
            }
        }

        /// <summary>
        /// Delete old audit logs (admin only)
        /// </summary>
        [HttpDelete("cleanup")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> CleanupOldLogs([FromQuery] int daysToKeep = 365)
        {
            try
            {
                var olderThan = DateTime.UtcNow.AddDays(-daysToKeep);
                var deletedCount = await _auditLogService.DeleteOldLogsAsync(olderThan);

                _logger.LogInformation($"Deleted {deletedCount} audit logs older than {olderThan}");

                return Ok(new
                {
                    deletedCount,
                    olderThan,
                    message = $"Successfully deleted {deletedCount} audit log entries"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to cleanup old audit logs");
                return StatusCode(500, new { error = "Failed to cleanup audit logs", message = ex.Message });
            }
        }
    }
}
