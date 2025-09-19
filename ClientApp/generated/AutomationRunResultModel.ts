import { DetectReqResultModel } from './DetectReqResultModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { DocumentModel } from './DocumentModel';
import { PageImageModel } from './PageImageModel';
//Generated from class components.forms.AutomationRunResultModel
export interface AutomationRunResultModel {
  docs: DocumentModel[];
  detected: { [key: string]: DetectReqResultModel[] };
  pagesLeft: PageImageModel[];
}
