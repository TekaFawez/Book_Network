/* tslint:disable */
/* eslint-disable */
import { BookResponse } from '../models/book-response';
import { Links } from '../models/links';
export interface CollectionModelBook {
  '_embedded'?: {
'books'?: Array<BookResponse>;
};
  '_links'?: Links;
}
