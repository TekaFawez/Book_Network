/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelFeedback } from '../../models/collection-model-feedback';

export interface FollowPropertyReferenceBookGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceBookGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceBookGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceBookGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceBookGet1$Json.PATH = '/books/{id}/feedbacks';
