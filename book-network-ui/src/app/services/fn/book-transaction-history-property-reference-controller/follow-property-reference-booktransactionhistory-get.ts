/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelBook } from '../../models/entity-model-book';

export interface FollowPropertyReferenceBooktransactionhistoryGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceBooktransactionhistoryGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceBooktransactionhistoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceBooktransactionhistoryGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelBook>;
    })
  );
}

followPropertyReferenceBooktransactionhistoryGet.PATH = '/bookTransactionHistories/{id}/book/{propertyId}';
