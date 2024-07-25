/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelBookTransactionHistory } from '../../models/entity-model-book-transaction-history';

export interface ExecuteSearchBooktransactionhistoryGet3$Params {
  bookId?: number;
  userId?: number;
}

export function executeSearchBooktransactionhistoryGet3(http: HttpClient, rootUrl: string, params?: ExecuteSearchBooktransactionhistoryGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
  const rb = new RequestBuilder(rootUrl, executeSearchBooktransactionhistoryGet3.PATH, 'get');
  if (params) {
    rb.query('bookId', params.bookId, {});
    rb.query('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelBookTransactionHistory>;
    })
  );
}

executeSearchBooktransactionhistoryGet3.PATH = '/bookTransactionHistories/search/findByBookIdAndUserId';
