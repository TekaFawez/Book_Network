/* tslint:disable */
/* eslint-disable */
import { BookTransactionHistoryResponse } from '../models/book-transaction-history-response';
import { Links } from '../models/links';
export interface CollectionModelBookTransactionHistory {
  '_embedded'?: {
'bookTransactionHistories'?: Array<BookTransactionHistoryResponse>;
};
  '_links'?: Links;
}
