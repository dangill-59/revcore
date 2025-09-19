/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { OCRZoneModel } from './OCRZoneModel';
import { PageHolderModel } from './PageHolderModel';
//Generated from class commonInterfaces.dbDataTypes.AutomationTaskModel
export interface AutomationTaskModel extends PageHolderModel {
  projectId: string;
  name: string;
  scriptCode: string;
  zones: OCRZoneModel[];
}
