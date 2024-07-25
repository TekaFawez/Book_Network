/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelObject } from '../../models/collection-model-object';
import { EntityModelUser } from '../../models/entity-model-user';

export interface CreatePropertyReferenceBooktransactionhistoryPut1$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceBooktransactionhistoryPut1$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceBooktransactionhistoryPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceBooktransactionhistoryPut1$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceBooktransactionhistoryPut1$Json.PATH = '/bookTransactionHistories/{id}/user';
