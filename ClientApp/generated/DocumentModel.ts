import { ExternalIndexModel } from './ExternalIndexModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { PageHolderModel } from './PageHolderModel';
//Generated from class commonInterfaces.dbDataTypes.DocumentModel
export interface DocumentModel extends PageHolderModel {
  projectId: string;
  evoDocId: string;
  indexes: { [key: string]: any };
  isPlaceHolder: boolean;
  integrations: { [key: string]: ExternalIndexModel };
}
