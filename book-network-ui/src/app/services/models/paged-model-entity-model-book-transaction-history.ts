/* tslint:disable */
/* eslint-disable */
import { EntityModelBookTransactionHistory } from '../models/entity-model-book-transaction-history';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelBookTransactionHistory {
  '_embedded'?: {
'bookTransactionHistories'?: Array<EntityModelBookTransactionHistory>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
