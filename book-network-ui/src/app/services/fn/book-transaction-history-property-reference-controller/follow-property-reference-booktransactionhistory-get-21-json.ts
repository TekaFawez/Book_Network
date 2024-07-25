/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelUser } from '../../models/entity-model-user';

export interface FollowPropertyReferenceBooktransactionhistoryGet21$Json$Params {
  id: string;
}

export function followPropertyReferenceBooktransactionhistoryGet21$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceBooktransactionhistoryGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceBooktransactionhistoryGet21$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelUser>;
    })
  );
}

followPropertyReferenceBooktransactionhistoryGet21$Json.PATH = '/bookTransactionHistories/{id}/user';
