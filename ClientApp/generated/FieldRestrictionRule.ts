import { FieldRestrictionRuleType } from './FieldRestrictionRuleType';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
//Generated from class commonInterfaces.dbDataTypes.FieldRestrictionRule
export interface FieldRestrictionRule {
  ruleType: FieldRestrictionRuleType;
  allowedValues: string[];
  userIds: string[];
  roles: string[];
  description: string;
}
