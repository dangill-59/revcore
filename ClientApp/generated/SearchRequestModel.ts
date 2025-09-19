/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { SearchReqSortModel } from './SearchReqSortModel';
//Generated from class components.searchView.SearchRequestModel
export interface SearchRequestModel {
  selectedProjects: string[];
  fields: { [key: string]: string[] };
  sortBy: { [key: string]: SearchReqSortModel };
  fullTextOCRTerm: string;
}
