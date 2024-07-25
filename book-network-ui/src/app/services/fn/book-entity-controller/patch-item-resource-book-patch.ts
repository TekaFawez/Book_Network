/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BookRequestBody } from '../../models/book-request-body';
import { EntityModelBook } from '../../models/entity-model-book';

export interface PatchItemResourceBookPatch$Params {
  id: string;
      body: BookRequestBody
}

export function patchItemResourceBookPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceBookPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceBookPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceBookPatch.PATH = '/books/{id}';
