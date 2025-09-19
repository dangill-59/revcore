/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { PageImageTypeModel } from './PageImageTypeModel';
//Generated from class commonInterfaces.dbDataTypes.PageImageModel
export interface PageImageModel {
  id: string;
  path: string;
  originalId: string;
  renderQ: string;
  orderNumber: number;
  width: number;
  height: number;
  size: number;
  processingError: string;
  pageType: PageImageTypeModel;
  offLineProcessingOnly: boolean;
  proccesingTags: string[];
  created: Date;
  modified: Date;
  originalPageName: string;
  proccessingFailureCount: number;
}
