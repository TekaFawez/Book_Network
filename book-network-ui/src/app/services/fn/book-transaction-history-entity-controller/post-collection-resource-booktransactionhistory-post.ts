/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BookTransactionHistoryRequestBody } from '../../models/book-transaction-history-request-body';
import { EntityModelBookTransactionHistory } from '../../models/entity-model-book-transaction-history';

export interface PostCollectionResourceBooktransactionhistoryPost$Params {
      body: BookTransactionHistoryRequestBody
}

export function postCollectionResourceBooktransactionhistoryPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceBooktransactionhistoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceBooktransactionhistoryPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postCollectionResourceBooktransactionhistoryPost.PATH = '/bookTransactionHistories';
