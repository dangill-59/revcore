/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */

//Generated from class commonInterfaces.dbDataTypes.AuditLogModel
export interface AuditLogModel {
  id: string;
  workspaceId: string;
  eventType: AuditEventType;
  userId: string;
  userName: string;
  userEmail: string;
  timestamp: Date;
  targetId: string;
  targetType: string;
  targetName: string;
  projectId: string;
  projectName: string;
  description: string;
  ipAddress: string;
  userAgent: string;
  metadata: { [key: string]: any };
  oldValues: { [key: string]: any };
  newValues: { [key: string]: any };
  success: boolean;
  errorMessage: string;
  durationMs: number;
}

//Generated from enum commonInterfaces.dbDataTypes.AuditEventType
export enum AuditEventType {
  DocumentCreated = 'DocumentCreated',
  DocumentUpdated = 'DocumentUpdated',
  DocumentDeleted = 'DocumentDeleted',
  DocumentViewed = 'DocumentViewed',
  DocumentDownloaded = 'DocumentDownloaded',
  DocumentShared = 'DocumentShared',
  UserLogin = 'UserLogin',
  UserLogout = 'UserLogout',
  UserCreated = 'UserCreated',
  UserUpdated = 'UserUpdated',
  UserDeleted = 'UserDeleted',
  UserPasswordChanged = 'UserPasswordChanged',
  UserRoleChanged = 'UserRoleChanged',
  UserPermissionChanged = 'UserPermissionChanged',
  RepositoryCreated = 'RepositoryCreated',
  RepositoryUpdated = 'RepositoryUpdated',
  RepositoryDeleted = 'RepositoryDeleted',
  RepositoryAccessGranted = 'RepositoryAccessGranted',
  RepositoryAccessRevoked = 'RepositoryAccessRevoked',
  WorkspaceCreated = 'WorkspaceCreated',
  WorkspaceUpdated = 'WorkspaceUpdated',
  WorkspaceSettingsChanged = 'WorkspaceSettingsChanged',
  UnauthorizedAccessAttempt = 'UnauthorizedAccessAttempt',
  PermissionDenied = 'PermissionDenied',
  SystemConfigurationChanged = 'SystemConfigurationChanged',
  Other = 'Other'
}

//Generated from class commonInterfaces.dbDataTypes.AuditLogQueryModel
export interface AuditLogQueryModel {
  userId: string;
  targetId: string;
  targetType: string;
  projectId: string;
  eventType: AuditEventType;
  eventTypes: AuditEventType[];
  startDate: Date;
  endDate: Date;
  searchText: string;
  success: boolean;
  page: number;
  pageSize: number;
  sortBy: string;
  sortDirection: string;
}

//Generated from class commonInterfaces.dbDataTypes.AuditLogQueryResultModel
export interface AuditLogQueryResultModel {
  logs: AuditLogModel[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
