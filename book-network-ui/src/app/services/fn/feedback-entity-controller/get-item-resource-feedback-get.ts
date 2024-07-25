/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFeedback } from '../../models/entity-model-feedback';

export interface GetItemResourceFeedbackGet$Params {
  id: string;
}

export function getItemResourceFeedbackGet(http: HttpClient, rootUrl: string, params: GetItemResourceFeedbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFeedback>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceFeedbackGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelFeedback>;
    })
  );
}

getItemResourceFeedbackGet.PATH = '/feedbacks/{id}';
