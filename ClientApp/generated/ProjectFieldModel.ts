import { FieldLookupTypeModel } from './FieldLookupTypeModel';
import { FieldRestrictionRule } from './FieldRestrictionRule';
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
  documentRestrictionBranch: boolean;
  documentRestrictionForRoles: boolean;
  restrictions?: FieldRestrictionRule[];
  indexSortOrder?: number;
  noIndexForRoles?: string[];
  fieldType: ProjectFieldTypeModel;
  userlistValues: string[];
  integrationOptions: { [key: string]: string };
  defaultSearchProps?: FieldSearchPropsModel;
  lookupType: FieldLookupTypeModel;
  systemDefined: boolean;
}
