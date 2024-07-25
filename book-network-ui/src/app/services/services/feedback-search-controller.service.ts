/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { executeSearchFeedbackGet } from '../fn/feedback-search-controller/execute-search-feedback-get';
import { ExecuteSearchFeedbackGet$Params } from '../fn/feedback-search-controller/execute-search-feedback-get';
import { PagedModelEntityModelFeedback } from '../models/paged-model-entity-model-feedback';

@Injectable({ providedIn: 'root' })
export class FeedbackSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchFeedbackGet()` */
  static readonly ExecuteSearchFeedbackGetPath = '/feedbacks/search/findAllByBookId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchFeedbackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFeedbackGet$Response(params?: ExecuteSearchFeedbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelFeedback>> {
    return executeSearchFeedbackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchFeedbackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchFeedbackGet(params?: ExecuteSearchFeedbackGet$Params, context?: HttpContext): Observable<PagedModelEntityModelFeedback> {
    return this.executeSearchFeedbackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelFeedback>): PagedModelEntityModelFeedback => r.body)
    );
  }

}
