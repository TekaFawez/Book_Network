/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedModelEntityModelFeedback } from '../../models/paged-model-entity-model-feedback';

export interface ExecuteSearchFeedbackGet$Params {
  bookId?: number;

/**
 * Zero-based page index (0..N)
 */
  page?: number;

/**
 * The size of the page to be returned
 */
  size?: number;

/**
 * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
 */
  sort?: Array<string>;
}

export function executeSearchFeedbackGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchFeedbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelFeedback>> {
  const rb = new RequestBuilder(rootUrl, executeSearchFeedbackGet.PATH, 'get');
  if (params) {
    rb.query('bookId', params.bookId, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sort', params.sort, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PagedModelEntityModelFeedback>;
    })
  );
}

executeSearchFeedbackGet.PATH = '/feedbacks/search/findAllByBookId';
