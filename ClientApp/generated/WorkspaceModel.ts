import { LicFeatureModel } from './LicFeatureModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { MailSettingsModel } from './MailSettingsModel';
import { OpenConnectModel } from './OpenConnectModel';
import { QuotaModel } from './QuotaModel';
//Generated from class commonInterfaces.dbDataTypes.WorkspaceModel
export interface WorkspaceModel {
  id: string;
  name: string;
  ownerUser: string;
  billingUser: string;
  admins: string[];
  users: string[];
  openIdProviders: { [key: string]: OpenConnectModel };
  suspendBackGroundImageProcessing: boolean;
  inactivityTimeoutMin: number;
  revInstanceName: string;
  created: Date;
  modified: Date;
  billingSubscription: { [key: string]: string };
  mailSettings: MailSettingsModel;
  features: { [key: string]: LicFeatureModel };
  quotas: { [key: string]: QuotaModel };
  metaData: { [key: string]: string };
  maxImmediatePageProcessingSize: number;
}
