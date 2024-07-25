/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelBook } from '../../models/entity-model-book';

export interface FollowPropertyReferenceFeedbackGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceFeedbackGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceFeedbackGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceFeedbackGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceFeedbackGet1$Json.PATH = '/feedbacks/{id}/book';
