/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { executeSearchBookGet } from '../fn/book-search-controller/execute-search-book-get';
import { ExecuteSearchBookGet$Params } from '../fn/book-search-controller/execute-search-book-get';
import { PagedModelEntityModelBook } from '../models/paged-model-entity-model-book';

@Injectable({ providedIn: 'root' })
export class BookSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchBookGet()` */
  static readonly ExecuteSearchBookGetPath = '/books/search/findAllDisabledBooks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchBookGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBookGet$Response(params?: ExecuteSearchBookGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBook>> {
    return executeSearchBookGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchBookGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBookGet(params?: ExecuteSearchBookGet$Params, context?: HttpContext): Observable<PagedModelEntityModelBook> {
    return this.executeSearchBookGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelBook>): PagedModelEntityModelBook => r.body)
    );
  }

}
