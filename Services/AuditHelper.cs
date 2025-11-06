using commonInterfaces.dbDataTypes;
using commonInterfaces.interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using restUpdate;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace revCore2site.Services
{
    /// <summary>
    /// Helper class to simplify audit logging from controllers
    /// </summary>
    public class AuditHelper
    {
        private readonly IAuditLogService _auditLogService;
        private readonly commonInterfaces.IRevDatabase _revDb;
        private readonly ILogger<AuditHelper> _logger;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuditHelper(
            IAuditLogService auditLogService,
            commonInterfaces.IRevDatabase revDb,
            ILogger<AuditHelper> logger,
            IHttpContextAccessor httpContextAccessor)
        {
            _auditLogService = auditLogService;
            _revDb = revDb;
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
        }

        /// <summary>
        /// Log an audit event with automatic context population
        /// </summary>
        public async Task LogAsync(
            AuditEventType eventType,
            string description,
            string targetId = null,
            string targetType = null,
            string targetName = null,
            Dictionary<string, object> metadata = null,
            Dictionary<string, object> oldValues = null,
            Dictionary<string, object> newValues = null,
            bool success = true,
            string errorMessage = null,
            string overrideUserId = null,
            string overrideUserName = null,
            string overrideUserEmail = null)
        {
            try
            {
                var workspaceId = _revDb.dbName;
                var httpContext = _httpContextAccessor.HttpContext;

                _logger.LogInformation($"AUDIT CREATE: EventType={eventType}, WorkspaceId=\"{workspaceId ?? "NULL"}\"");

                // Use override parameters if provided, otherwise extract from HttpContext claims
                var userId = overrideUserId ?? httpContext?.User?.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

                // Get display name from custom "name" claim or override
                var userName = overrideUserName ?? httpContext?.User?.FindFirst("name")?.Value;

                // Use override email or leave empty
                string userEmail = overrideUserEmail;

                var auditLog = new AuditLogModel
                {
                    id = Guid.NewGuid().ToString(),
                    workspaceId = workspaceId,
                    eventType = eventType,
                    description = description,
                    timestamp = DateTime.UtcNow,
                    userId = userId,
                    userName = userName,
                    userEmail = userEmail,
                    targetId = targetId,
                    targetType = targetType,
                    targetName = targetName,
                    metadata = metadata,
                    oldValues = oldValues,
                    newValues = newValues,
                    success = success,
                    errorMessage = errorMessage
                };

                // Populate IP address and user agent
                if (httpContext != null)
                {
                    auditLog.ipAddress = httpContext.Connection?.RemoteIpAddress?.ToString();
                    auditLog.userAgent = httpContext.Request?.Headers["User-Agent"].ToString();
                }

                await _auditLogService.LogEventAsync(auditLog);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Failed to log audit event: {eventType}");
                // Don't throw - audit logging failure shouldn't break the main operation
            }
        }

        /// <summary>
        /// Log document creation
        /// </summary>
        public Task LogDocumentCreatedAsync(string documentId, string documentName, string projectId = null, string projectName = null)
        {
            var description = !string.IsNullOrEmpty(projectName)
                ? $"Created document '{documentName}' in repository '{projectName}'"
                : $"Created document: {documentName}";

            return LogAsync(
                AuditEventType.DocumentCreated,
                description,
                targetId: documentId,
                targetType: "Document",
                targetName: documentName,
                metadata: new Dictionary<string, object>
                {
                    { "projectId", projectId },
                    { "projectName", projectName }
                }
            );
        }

        /// <summary>
        /// Log document update
        /// </summary>
        public Task LogDocumentUpdatedAsync(
            string documentId,
            string documentName,
            Dictionary<string, object> oldValues = null,
            Dictionary<string, object> newValues = null,
            Dictionary<string, object> metadata = null)
        {
            // Try to get project name from metadata
            var projectName = metadata?.ContainsKey("projectName") == true ? metadata["projectName"]?.ToString() : null;

            var description = !string.IsNullOrEmpty(projectName)
                ? $"Updated document '{documentName}' in repository '{projectName}'"
                : $"Updated document: {documentName}";

            return LogAsync(
                AuditEventType.DocumentUpdated,
                description,
                targetId: documentId,
                targetType: "Document",
                targetName: documentName,
                oldValues: oldValues,
                newValues: newValues,
                metadata: metadata
            );
        }

        /// <summary>
        /// Log document deletion
        /// </summary>
        public Task LogDocumentDeletedAsync(string documentId, string documentName, string projectName = null)
        {
            var description = !string.IsNullOrEmpty(projectName)
                ? $"Deleted document '{documentName}' from repository '{projectName}'"
                : $"Deleted document: {documentName}";

            return LogAsync(
                AuditEventType.DocumentDeleted,
                description,
                targetId: documentId,
                targetType: "Document",
                targetName: documentName,
                metadata: !string.IsNullOrEmpty(projectName) ? new Dictionary<string, object> { { "projectName", projectName } } : null
            );
        }

        /// <summary>
        /// Log document view
        /// </summary>
        public Task LogDocumentViewedAsync(string documentId, string documentName)
        {
            return LogAsync(
                AuditEventType.DocumentViewed,
                $"Viewed document: {documentName}",
                targetId: documentId,
                targetType: "Document",
                targetName: documentName
            );
        }

        /// <summary>
        /// Log user login
        /// </summary>
        public Task LogUserLoginAsync(string userId, string userName, string email)
        {
            return LogAsync(
                AuditEventType.UserLogin,
                $"User logged in: {userName}",
                targetId: userId,
                targetType: "User",
                targetName: userName,
                overrideUserId: userId,
                overrideUserName: userName,
                overrideUserEmail: email
            );
        }

        /// <summary>
        /// Log unauthorized access attempt
        /// </summary>
        public Task LogUnauthorizedAccessAsync(string resourceId, string resourceType, string reason)
        {
            return LogAsync(
                AuditEventType.UnauthorizedAccessAttempt,
                $"Unauthorized access attempt to {resourceType}: {reason}",
                targetId: resourceId,
                targetType: resourceType,
                success: false,
                errorMessage: reason
            );
        }

        /// <summary>
        /// Log permission denied
        /// </summary>
        public Task LogPermissionDeniedAsync(string resourceId, string resourceType, string action)
        {
            return LogAsync(
                AuditEventType.PermissionDenied,
                $"Permission denied for {action} on {resourceType}",
                targetId: resourceId,
                targetType: resourceType,
                success: false
            );
        }

        /// <summary>
        /// Log repository/project creation
        /// </summary>
        public Task LogRepositoryCreatedAsync(
            string repositoryId,
            string repositoryName,
            Dictionary<string, object> metadata = null)
        {
            return LogAsync(
                AuditEventType.RepositoryCreated,
                $"Created repository: {repositoryName}",
                targetId: repositoryId,
                targetType: "Repository",
                targetName: repositoryName,
                metadata: metadata
            );
        }

        /// <summary>
        /// Log repository/project update
        /// </summary>
        public Task LogRepositoryUpdatedAsync(
            string repositoryId,
            string repositoryName,
            Dictionary<string, object> oldValues = null,
            Dictionary<string, object> newValues = null,
            Dictionary<string, object> metadata = null)
        {
            return LogAsync(
                AuditEventType.RepositoryUpdated,
                $"Updated repository: {repositoryName}",
                targetId: repositoryId,
                targetType: "Repository",
                targetName: repositoryName,
                oldValues: oldValues,
                newValues: newValues,
                metadata: metadata
            );
        }

        /// <summary>
        /// Log repository/project deletion
        /// </summary>
        public Task LogRepositoryDeletedAsync(string repositoryId, string repositoryName)
        {
            return LogAsync(
                AuditEventType.RepositoryDeleted,
                $"Deleted repository: {repositoryName}",
                targetId: repositoryId,
                targetType: "Repository",
                targetName: repositoryName
            );
        }

        /// <summary>
        /// Log workspace user creation/invitation
        /// </summary>
        public Task LogUserCreatedAsync(
            string userId,
            string userEmail,
            bool isAdmin = false,
            bool wasInvited = false,
            Dictionary<string, object> metadata = null)
        {
            var description = wasInvited
                ? $"Invited user '{userEmail}' to workspace{(isAdmin ? " as administrator" : "")}"
                : $"Created user '{userEmail}'{(isAdmin ? " as administrator" : "")}";

            var meta = metadata ?? new Dictionary<string, object>();
            meta["isAdmin"] = isAdmin;
            meta["wasInvited"] = wasInvited;

            return LogAsync(
                AuditEventType.UserCreated,
                description,
                targetId: userId,
                targetType: "User",
                targetName: userEmail,
                metadata: meta
            );
        }

        /// <summary>
        /// Log workspace user deletion/removal
        /// </summary>
        public Task LogUserDeletedAsync(string userId, string userEmail)
        {
            return LogAsync(
                AuditEventType.UserDeleted,
                $"Removed user '{userEmail}' from workspace",
                targetId: userId,
                targetType: "User",
                targetName: userEmail
            );
        }

        /// <summary>
        /// Log user role change (admin status)
        /// </summary>
        public Task LogUserRoleChangedAsync(
            string userId,
            string userEmail,
            bool newIsAdmin,
            Dictionary<string, object> metadata = null)
        {
            var description = newIsAdmin
                ? $"Granted administrator role to user '{userEmail}'"
                : $"Revoked administrator role from user '{userEmail}'";

            var oldValues = new Dictionary<string, object>
            {
                { "Administrator", !newIsAdmin }
            };

            var newValues = new Dictionary<string, object>
            {
                { "Administrator", newIsAdmin }
            };

            return LogAsync(
                AuditEventType.UserRoleChanged,
                description,
                targetId: userId,
                targetType: "User",
                targetName: userEmail,
                oldValues: oldValues,
                newValues: newValues,
                metadata: metadata
            );
        }

        /// <summary>
        /// Log user permission/role update
        /// </summary>
        public Task LogUserPermissionChangedAsync(
            string userId,
            string userEmail,
            string[] oldRoles,
            string[] newRoles,
            Dictionary<string, object> metadata = null)
        {
            var description = $"Updated permissions for user '{userEmail}'";

            var oldValues = new Dictionary<string, object>
            {
                { "Roles", oldRoles != null && oldRoles.Length > 0 ? string.Join(", ", oldRoles) : "(none)" }
            };

            var newValues = new Dictionary<string, object>
            {
                { "Roles", newRoles != null && newRoles.Length > 0 ? string.Join(", ", newRoles) : "(none)" }
            };

            return LogAsync(
                AuditEventType.UserPermissionChanged,
                description,
                targetId: userId,
                targetType: "User",
                targetName: userEmail,
                oldValues: oldValues,
                newValues: newValues,
                metadata: metadata
            );
        }
    }
}
