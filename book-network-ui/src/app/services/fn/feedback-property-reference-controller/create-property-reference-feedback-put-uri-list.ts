/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelBook } from '../../models/entity-model-book';

export interface CreatePropertyReferenceFeedbackPut$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceFeedbackPut$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceFeedbackPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceFeedbackPut$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
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

createPropertyReferenceFeedbackPut$UriList.PATH = '/feedbacks/{id}/book';
