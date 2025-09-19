/*  GENERTAED automatically using Models.tst. DO NOT CHANGE HERE */
import { BillableFeaturesModel } from './BillableFeaturesModel';
//Generated from class components.billing.SubscriptionDetailsModel
export interface SubscriptionDetailsModel {
  id: string;
  forProduct: BillableFeaturesModel;
  planId: string;
  isMetered: boolean;
  quantity: number;
  description: string;
  unit: string;
  interval: string;
  config: { [key: string]: string };
}
