/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFeedback } from '../../models/collection-model-feedback';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceBookPatch$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceBookPatch$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceBookPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceBookPatch$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelFeedback>;
    })
  );
}

createPropertyReferenceBookPatch$Json.PATH = '/books/{id}/feedbacks';
