import { PermissionsModel } from './PermissionsModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { ProjectFieldModel } from './ProjectFieldModel';
//Generated from class commonInterfaces.dbDataTypes.ProjectModel
export interface ProjectModel {
  id: string;
  name: string;
  description: string;
  templateName: string;
  templateImage: string;
  fullTextOcr: boolean;
  fields: ProjectFieldModel[];
  noUserReorder: boolean;
  permissions: { [key: string]: PermissionsModel };
  disableEdit: boolean;
}
