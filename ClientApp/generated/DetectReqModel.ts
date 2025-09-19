import { JobBaseDataModel } from './JobBaseDataModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { OCRZoneModel } from './OCRZoneModel';
//Generated from class commonInterfaces.dbDataTypes.DetectReqModel
export interface DetectReqModel extends JobBaseDataModel {
  zones: OCRZoneModel[];
  pageId: string;
}
