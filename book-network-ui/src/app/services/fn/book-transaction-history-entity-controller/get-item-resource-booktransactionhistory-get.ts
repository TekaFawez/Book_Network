/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelBookTransactionHistory } from '../../models/entity-model-book-transaction-history';

export interface GetItemResourceBooktransactionhistoryGet$Params {
  id: string;
}

export function getItemResourceBooktransactionhistoryGet(http: HttpClient, rootUrl: string, params: GetItemResourceBooktransactionhistoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceBooktransactionhistoryGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getItemResourceBooktransactionhistoryGet.PATH = '/bookTransactionHistories/{id}';
