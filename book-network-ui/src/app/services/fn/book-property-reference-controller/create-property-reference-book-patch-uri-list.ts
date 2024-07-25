/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFeedback } from '../../models/collection-model-feedback';

export interface CreatePropertyReferenceBookPatch$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceBookPatch$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceBookPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceBookPatch$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
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

createPropertyReferenceBookPatch$UriList.PATH = '/books/{id}/feedbacks';
