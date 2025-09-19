/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { LicFeatureModel } from './LicFeatureModel';
//Generated from class components.workspace.WorkspaceAccessModel
export interface WorkspaceAccessModel {
  id: string;
  name: string;
  revInstance: string;
  isOwner: boolean;
  features: { [key: string]: LicFeatureModel };
}
