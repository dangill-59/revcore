/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { PageImageModel } from './PageImageModel';
//Generated from class commonInterfaces.dbDataTypes.PageHolderModel
export interface PageHolderModel {
  id: string;
  pages: PageImageModel[];
  created: Date;
  modified: Date;
  catalogued: boolean;
  pageProcessingStartedAt: Date;
  hasUnprocessedpages: boolean;
  pageOrders: { [key: string]: number };
  queueStatus: { [key: string]: string };
}
