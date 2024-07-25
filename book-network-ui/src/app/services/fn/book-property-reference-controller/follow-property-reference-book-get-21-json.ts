/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelBookTransactionHistory } from '../../models/collection-model-book-transaction-history';

export interface FollowPropertyReferenceBookGet21$Json$Params {
  id: string;
}

export function followPropertyReferenceBookGet21$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceBookGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceBookGet21$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelBookTransactionHistory>;
    })
  );
}

followPropertyReferenceBookGet21$Json.PATH = '/books/{id}/histories';
