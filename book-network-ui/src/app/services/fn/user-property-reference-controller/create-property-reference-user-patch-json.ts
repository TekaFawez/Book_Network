/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelBook } from '../../models/collection-model-book';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceUserPatch$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceUserPatch$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBook>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceUserPatch$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelBook>;
    })
  );
}

createPropertyReferenceUserPatch$Json.PATH = '/users/{id}/books';
