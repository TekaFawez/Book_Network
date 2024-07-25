/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelBookTransactionHistory {
  '_links'?: Links;
  createdBy?: number;
  createdDate?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  returnApproved?: boolean;
  returned?: boolean;
}
