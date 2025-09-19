/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { InvitationEmailModel } from './InvitationEmailModel';
//Generated from class commonInterfaces.dbDataTypes.WorkspaceUserModel
export interface WorkspaceUserModel {
  id: string;
  phoneNumber: string;
  fullName: string;
  isVaccant?: boolean;
  roles?: string[];
  created?: Date;
  modified?: Date;
  invitationEmail?: InvitationEmailModel;
  lastSignedIn?: Date;
}
