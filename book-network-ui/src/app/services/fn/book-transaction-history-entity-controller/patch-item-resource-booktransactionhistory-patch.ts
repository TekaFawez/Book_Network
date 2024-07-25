/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BookTransactionHistoryRequestBody } from '../../models/book-transaction-history-request-body';
import { EntityModelBookTransactionHistory } from '../../models/entity-model-book-transaction-history';

export interface PatchItemResourceBooktransactionhistoryPatch$Params {
  id: string;
      body: BookTransactionHistoryRequestBody
}

export function patchItemResourceBooktransactionhistoryPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceBooktransactionhistoryPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceBooktransactionhistoryPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

patchItemResourceBooktransactionhistoryPatch.PATH = '/bookTransactionHistories/{id}';
