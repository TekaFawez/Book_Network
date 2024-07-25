/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedModelEntityModelBook } from '../../models/paged-model-entity-model-book';

export interface ExecuteSearchBookGet$Params {
  userId?: number;

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

export function executeSearchBookGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchBookGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBook>> {
  const rb = new RequestBuilder(rootUrl, executeSearchBookGet.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sort', params.sort, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PagedModelEntityModelBook>;
    })
  );
}

executeSearchBookGet.PATH = '/books/search/findAllDisabledBooks';
