/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelRole } from '../../models/collection-model-role';

export interface FollowPropertyReferenceUserGet31$Json$Params {
  id: string;
}

export function followPropertyReferenceUserGet31$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUserGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUserGet31$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelRole>;
    })
  );
}

followPropertyReferenceUserGet31$Json.PATH = '/users/{id}/roles';
