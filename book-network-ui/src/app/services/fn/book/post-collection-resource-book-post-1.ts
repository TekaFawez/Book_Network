/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BookRequest } from '../../models/book-request';
import { EntityModelBook } from '../../models/entity-model-book';

export interface PostCollectionResourceBookPost1$Params {
      body: BookRequest
}

export function postCollectionResourceBookPost1(http: HttpClient, rootUrl: string, params: PostCollectionResourceBookPost1$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceBookPost1.PATH, 'post');
  if (params) {
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

postCollectionResourceBookPost1.PATH = '/books';
