import { JobBaseDataModel } from './JobBaseDataModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { JobTypeModel } from './JobTypeModel';
//Generated from class commonInterfaces.dbDataTypes.JobDataModel
export interface JobDataModel extends JobBaseDataModel {
  jobType: JobTypeModel;
  resultURL: string;
  jobInput: string;
  permissions: string[];
}
