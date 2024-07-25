/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedModelEntityModelBookTransactionHistory } from '../../models/paged-model-entity-model-book-transaction-history';

export interface ExecuteSearchBooktransactionhistoryGet1$Params {
  userId?: number;

/**
 * Zero-based page index (0..N)
 */
  page?: number;

/**
 * The size of the page to be returned
 */
  size?: number;

/**
 * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
 */
  sort?: Array<string>;
}

export function executeSearchBooktransactionhistoryGet1(http: HttpClient, rootUrl: string, params?: ExecuteSearchBooktransactionhistoryGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>> {
  const rb = new RequestBuilder(rootUrl, executeSearchBooktransactionhistoryGet1.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sort', params.sort, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>;
    })
  );
}

executeSearchBooktransactionhistoryGet1.PATH = '/bookTransactionHistories/search/findAllReturnedBooks';
