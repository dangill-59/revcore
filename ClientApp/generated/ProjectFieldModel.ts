import { FieldLookupTypeModel } from './FieldLookupTypeModel';
import { FieldSearchPropsModel } from './FieldSearchPropsModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { ProjectFieldTypeModel } from './ProjectFieldTypeModel';
//Generated from class commonInterfaces.dbDataTypes.ProjectFieldModel
export interface ProjectFieldModel {
  id: string;
  displayName: string;
  required: boolean;
  unique: boolean;
  documentRestriction: boolean;
  indexSortOrder?: number;
  noIndexForRoles?: string[];
  fieldType: ProjectFieldTypeModel;
  userlistValues: string[];
  integrationOptions: { [key: string]: string };
  defaultSearchProps?: FieldSearchPropsModel;
  lookupType: FieldLookupTypeModel;
  systemDefined: boolean;
}
