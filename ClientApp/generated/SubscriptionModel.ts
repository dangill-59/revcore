import { SubscriptionDetailsModel } from './SubscriptionDetailsModel';
/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { SubscriptionStatusModel } from './SubscriptionStatusModel';
//Generated from class components.billing.SubscriptionModel
export interface SubscriptionModel {
  id: string;
  status: SubscriptionStatusModel;
  currentPeriodEnd: Date;
  nextInvoiceAmount: number;
  trialEnd: Date;
  trialDaysLeft: number;
  details: SubscriptionDetailsModel[];
}
