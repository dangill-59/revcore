import { OCRStatusModel } from './OCRStatusModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { PageImageModel } from './PageImageModel';
//Generated from class commonInterfaces.dbDataTypes.OriginalFileModel
export interface OriginalFileModel {
  pageId: string;
  originalImage: PageImageModel;
  lastProcessingEventAt: Date;
  convertedPages: PageImageModel[];
  ocrStatus: OCRStatusModel;
  ocrFiles: { [key: string]: string[] };
  tags: string[];
}
