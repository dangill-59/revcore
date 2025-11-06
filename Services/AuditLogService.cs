using commonInterfaces.dbDataTypes;
using commonInterfaces.interfaces;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace revCore2site.Services
{
    /// <summary>
    /// MongoDB implementation of audit log service
    /// </summary>
    public class AuditLogService : IAuditLogService
    {
        private readonly IMongoCollection<AuditLogModel> _auditLogCollection;
        private readonly ILogger<AuditLogService> _logger;

        public AuditLogService(commonInterfaces.IRevDatabase revDatabase, ILogger<AuditLogService> logger)
        {
            _auditLogCollection = revDatabase.db.GetCollection<AuditLogModel>("auditLogs");
            _logger = logger;

            _logger.LogInformation($"AuditLogService: Initialized with database '{_auditLogCollection.Database.DatabaseNamespace.DatabaseName}'");

            // Create indexes for common queries
            EnsureIndexes();
        }

        private void EnsureIndexes()
        {
            try
            {
                // Index on timestamp for time-based queries
                _auditLogCollection.Indexes.CreateOne(
                    new CreateIndexModel<AuditLogModel>(
                        Builders<AuditLogModel>.IndexKeys.Descending(x => x.timestamp)
                    )
                );

                // Index on workspace + timestamp
                _auditLogCollection.Indexes.CreateOne(
                    new CreateIndexModel<AuditLogModel>(
                        Builders<AuditLogModel>.IndexKeys
                            .Ascending(x => x.workspaceId)
                            .Descending(x => x.timestamp)
                    )
                );

                // Index on userId + timestamp
                _auditLogCollection.Indexes.CreateOne(
                    new CreateIndexModel<AuditLogModel>(
                        Builders<AuditLogModel>.IndexKeys
                            .Ascending(x => x.userId)
                            .Descending(x => x.timestamp)
                    )
                );

                // Index on targetId + timestamp
                _auditLogCollection.Indexes.CreateOne(
                    new CreateIndexModel<AuditLogModel>(
                        Builders<AuditLogModel>.IndexKeys
                            .Ascending(x => x.targetId)
                            .Descending(x => x.timestamp)
                    )
                );

                // Index on eventType
                _auditLogCollection.Indexes.CreateOne(
                    new CreateIndexModel<AuditLogModel>(
                        Builders<AuditLogModel>.IndexKeys.Ascending(x => x.eventType)
                    )
                );
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to create audit log indexes");
            }
        }

        public async Task LogEventAsync(AuditLogModel auditLog)
        {
            try
            {
                if (string.IsNullOrEmpty(auditLog.id))
                {
                    auditLog.id = Guid.NewGuid().ToString();
                }

                if (auditLog.timestamp == default)
                {
                    auditLog.timestamp = DateTime.UtcNow;
                }

                _logger.LogInformation($"AUDIT: Logging event {auditLog.eventType} for user {auditLog.userName} ({auditLog.userId}) to database '{_auditLogCollection.Database.DatabaseNamespace.DatabaseName}'");
                await _auditLogCollection.InsertOneAsync(auditLog);
                _logger.LogInformation($"AUDIT: Successfully logged event {auditLog.eventType} with ID {auditLog.id} to database '{_auditLogCollection.Database.DatabaseNamespace.DatabaseName}'");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to log audit event");
                // Don't throw - audit logging failure shouldn't break the main operation
            }
        }

        public async Task<AuditLogQueryResultModel> QueryLogsAsync(AuditLogQueryModel query)
        {
            _logger.LogInformation($"AUDIT QUERY: Querying database '{_auditLogCollection.Database.DatabaseNamespace.DatabaseName}' for workspaceId='{query.workspaceId}'");

            // Check total documents in collection (for debugging)
            var totalDocsInCollection = await _auditLogCollection.CountDocumentsAsync(Builders<AuditLogModel>.Filter.Empty);
            _logger.LogInformation($"AUDIT QUERY DEBUG: Total documents in auditLogs collection: {totalDocsInCollection}");

            var filterBuilder = Builders<AuditLogModel>.Filter;
            var filters = new List<FilterDefinition<AuditLogModel>>();

            // Build filters
            if (!string.IsNullOrEmpty(query.workspaceId))
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding workspaceId filter = '{query.workspaceId}'");
                filters.Add(filterBuilder.Eq(x => x.workspaceId, query.workspaceId));
            }

            if (!string.IsNullOrEmpty(query.userId))
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding userId filter = '{query.userId}'");
                filters.Add(filterBuilder.Eq(x => x.userId, query.userId));
            }

            if (!string.IsNullOrEmpty(query.targetId))
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding targetId filter = '{query.targetId}'");
                filters.Add(filterBuilder.Eq(x => x.targetId, query.targetId));
            }

            if (!string.IsNullOrEmpty(query.targetType))
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding targetType filter = '{query.targetType}'");
                filters.Add(filterBuilder.Eq(x => x.targetType, query.targetType));
            }

            if (!string.IsNullOrEmpty(query.projectId))
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding projectId filter = '{query.projectId}'");
                filters.Add(filterBuilder.Eq(x => x.projectId, query.projectId));
            }

            if (query.eventType.HasValue)
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding eventType filter = {query.eventType.Value}");
                filters.Add(filterBuilder.Eq(x => x.eventType, query.eventType.Value));
            }

            if (query.eventTypes != null && query.eventTypes.Any())
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding eventTypes filter with {query.eventTypes.Count()} values");
                filters.Add(filterBuilder.In(x => x.eventType, query.eventTypes));
            }

            if (query.startDate.HasValue)
            {
                var startDate = query.startDate.Value;

                // If timezone offset is provided, convert local date to UTC
                if (query.timezoneOffsetMinutes.HasValue)
                {
                    // Client sends offset in minutes from UTC (e.g., -300 for EST, 60 for CET)
                    // To convert local time to UTC, we subtract the offset
                    startDate = startDate.AddMinutes(-query.timezoneOffsetMinutes.Value);
                    _logger.LogInformation($"AUDIT QUERY FILTER: Converted startDate from {query.startDate.Value} (local) to {startDate} (UTC) using offset {query.timezoneOffsetMinutes.Value} minutes");
                }
                else
                {
                    _logger.LogInformation($"AUDIT QUERY FILTER: Using startDate = {startDate} (no timezone conversion)");
                }

                filters.Add(filterBuilder.Gte(x => x.timestamp, startDate));
            }

            if (query.endDate.HasValue)
            {
                var endDate = query.endDate.Value;

                // If timezone offset is provided, convert local date to UTC
                if (query.timezoneOffsetMinutes.HasValue)
                {
                    // For end date, ensure we include the entire day by setting to end of day (23:59:59) before conversion
                    if (endDate.Hour < 12)
                    {
                        endDate = endDate.Date.AddDays(1).AddTicks(-1);
                        _logger.LogInformation($"AUDIT QUERY FILTER: Adjusted endDate to end of day: {endDate}");
                    }

                    // Convert local time to UTC
                    endDate = endDate.AddMinutes(-query.timezoneOffsetMinutes.Value);
                    _logger.LogInformation($"AUDIT QUERY FILTER: Converted endDate from {query.endDate.Value} (local) to {endDate} (UTC) using offset {query.timezoneOffsetMinutes.Value} minutes");
                }
                else
                {
                    // Fallback: If no timezone offset, use the hour < 12 heuristic as before
                    if (endDate.Hour < 12)
                    {
                        endDate = endDate.Date.AddDays(1).AddTicks(-1);
                        _logger.LogInformation($"AUDIT QUERY FILTER: Adjusted endDate from {query.endDate.Value} to end of day {endDate} (no timezone offset provided)");
                    }
                    else
                    {
                        _logger.LogInformation($"AUDIT QUERY FILTER: Using endDate = {endDate} (no timezone conversion)");
                    }
                }

                filters.Add(filterBuilder.Lte(x => x.timestamp, endDate));
            }

            if (!string.IsNullOrEmpty(query.searchText))
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding searchText filter = '{query.searchText}'");
                var searchFilter = filterBuilder.Or(
                    filterBuilder.Regex(x => x.description, new MongoDB.Bson.BsonRegularExpression(query.searchText, "i")),
                    filterBuilder.Regex(x => x.userName, new MongoDB.Bson.BsonRegularExpression(query.searchText, "i")),
                    filterBuilder.Regex(x => x.targetName, new MongoDB.Bson.BsonRegularExpression(query.searchText, "i"))
                );
                filters.Add(searchFilter);
            }

            if (query.success.HasValue)
            {
                _logger.LogInformation($"AUDIT QUERY FILTER: Adding success filter = {query.success.Value}");
                filters.Add(filterBuilder.Eq(x => x.success, query.success.Value));
            }

            // Combine filters
            var combinedFilter = filters.Any()
                ? filterBuilder.And(filters)
                : filterBuilder.Empty;

            // Log the filter details
            _logger.LogInformation($"AUDIT QUERY FILTER: Using {filters.Count} filter(s)");

            // Get total count
            var totalCount = await _auditLogCollection.CountDocumentsAsync(combinedFilter);

            _logger.LogInformation($"AUDIT QUERY COUNT: Found {totalCount} documents matching filter");

            // Build sort
            var sortBuilder = Builders<AuditLogModel>.Sort;
            SortDefinition<AuditLogModel> sort = query.sortDirection?.ToLower() == "asc"
                ? sortBuilder.Ascending(query.sortBy)
                : sortBuilder.Descending(query.sortBy);

            // Limit page size
            var pageSize = Math.Min(query.pageSize, 500);

            // Query with pagination
            var logs = await _auditLogCollection
                .Find(combinedFilter)
                .Sort(sort)
                .Skip(query.page * pageSize)
                .Limit(pageSize)
                .ToListAsync();

            return new AuditLogQueryResultModel
            {
                logs = logs,
                totalCount = totalCount,
                page = query.page,
                pageSize = pageSize,
                totalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
            };
        }

        public async Task<List<AuditLogModel>> GetDocumentHistoryAsync(string documentId, int limit = 100)
        {
            var filter = Builders<AuditLogModel>.Filter.Eq(x => x.targetId, documentId);
            var sort = Builders<AuditLogModel>.Sort.Descending(x => x.timestamp);

            return await _auditLogCollection
                .Find(filter)
                .Sort(sort)
                .Limit(Math.Min(limit, 500))
                .ToListAsync();
        }

        public async Task<List<AuditLogModel>> GetUserActivityAsync(string userId, int limit = 100)
        {
            var filter = Builders<AuditLogModel>.Filter.Eq(x => x.userId, userId);
            var sort = Builders<AuditLogModel>.Sort.Descending(x => x.timestamp);

            return await _auditLogCollection
                .Find(filter)
                .Sort(sort)
                .Limit(Math.Min(limit, 500))
                .ToListAsync();
        }

        public async Task<List<AuditLogModel>> GetRecentActivityAsync(string workspaceId, int limit = 50)
        {
            var filter = Builders<AuditLogModel>.Filter.Eq(x => x.workspaceId, workspaceId);
            var sort = Builders<AuditLogModel>.Sort.Descending(x => x.timestamp);

            return await _auditLogCollection
                .Find(filter)
                .Sort(sort)
                .Limit(Math.Min(limit, 500))
                .ToListAsync();
        }

        public async Task<long> DeleteOldLogsAsync(DateTime olderThan)
        {
            var filter = Builders<AuditLogModel>.Filter.Lt(x => x.timestamp, olderThan);
            var result = await _auditLogCollection.DeleteManyAsync(filter);
            return result.DeletedCount;
        }
    }
}
