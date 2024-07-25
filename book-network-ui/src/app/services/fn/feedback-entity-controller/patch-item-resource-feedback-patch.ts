/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelFeedback } from '../../models/entity-model-feedback';
import { FeedbackRequestBody } from '../../models/feedback-request-body';

export interface PatchItemResourceFeedbackPatch$Params {
  id: string;
      body: FeedbackRequestBody
}

export function patchItemResourceFeedbackPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceFeedbackPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFeedback>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceFeedbackPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceFeedbackPatch.PATH = '/feedbacks/{id}';
