/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */

//Generated from class commonInterfaces.dbDataTypes.MailSettingsModel
export interface MailSettingsModel {
  smtpHost: string;
  smtpPort: number;
  useTLS: boolean;
  needsAuthentication: boolean;
  userName: string;
  defaultMailFromEmail: string;
  defaultMailFromName: string;
  passWordEncrypted: string;
  mailFromIsLoggedinUser: boolean;
  replyToIsLoggedinUser: boolean;
  allowedRoles: string[];
}
