/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { ZoneTypeModel } from './ZoneTypeModel';
//Generated from class commonInterfaces.dbDataTypes.OCRZoneModel
export interface OCRZoneModel {
  id: string;
  clientReference: string;
  x: number;
  y: number;
  width: number;
  height: number;
  regex: string;
  type: ZoneTypeModel;
  isBreakField: boolean;
  ocrTolerance: number;
  recognizerReference: string;
}
