/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelBook } from '../../models/collection-model-book';

export interface FollowPropertyReferenceUserGet$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceUserGet(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBook>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUserGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceUserGet.PATH = '/users/{id}/books/{propertyId}';
