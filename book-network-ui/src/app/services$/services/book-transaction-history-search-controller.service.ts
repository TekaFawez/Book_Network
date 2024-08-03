/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelBookTransactionHistory } from '../models/entity-model-book-transaction-history';
import { executeSearchBooktransactionhistoryGet } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get';
import { ExecuteSearchBooktransactionhistoryGet$Params } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get';
import { executeSearchBooktransactionhistoryGet1 } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-1';
import { ExecuteSearchBooktransactionhistoryGet1$Params } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-1';
import { executeSearchBooktransactionhistoryGet2 } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-2';
import { ExecuteSearchBooktransactionhistoryGet2$Params } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-2';
import { executeSearchBooktransactionhistoryGet3 } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-3';
import { ExecuteSearchBooktransactionhistoryGet3$Params } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-3';
import { executeSearchBooktransactionhistoryGet4 } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-4';
import { ExecuteSearchBooktransactionhistoryGet4$Params } from '../fn/book-transaction-history-search-controller/execute-search-booktransactionhistory-get-4';
import { PagedModelEntityModelBookTransactionHistory } from '../models/paged-model-entity-model-book-transaction-history';

@Injectable({ providedIn: 'root' })
export class BookTransactionHistorySearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchBooktransactionhistoryGet()` */
  static readonly ExecuteSearchBooktransactionhistoryGetPath = '/bookTransactionHistories/search/findAllBorrowedBooks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchBooktransactionhistoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet$Response(params?: ExecuteSearchBooktransactionhistoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>> {
    return executeSearchBooktransactionhistoryGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchBooktransactionhistoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet(params?: ExecuteSearchBooktransactionhistoryGet$Params, context?: HttpContext): Observable<PagedModelEntityModelBookTransactionHistory> {
    return this.executeSearchBooktransactionhistoryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>): PagedModelEntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `executeSearchBooktransactionhistoryGet1()` */
  static readonly ExecuteSearchBooktransactionhistoryGet1Path = '/bookTransactionHistories/search/findAllReturnedBooks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchBooktransactionhistoryGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet1$Response(params?: ExecuteSearchBooktransactionhistoryGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>> {
    return executeSearchBooktransactionhistoryGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchBooktransactionhistoryGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet1(params?: ExecuteSearchBooktransactionhistoryGet1$Params, context?: HttpContext): Observable<PagedModelEntityModelBookTransactionHistory> {
    return this.executeSearchBooktransactionhistoryGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>): PagedModelEntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `executeSearchBooktransactionhistoryGet2()` */
  static readonly ExecuteSearchBooktransactionhistoryGet2Path = '/bookTransactionHistories/search/findByBookIdAndOwnerId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchBooktransactionhistoryGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet2$Response(params?: ExecuteSearchBooktransactionhistoryGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
    return executeSearchBooktransactionhistoryGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchBooktransactionhistoryGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet2(params?: ExecuteSearchBooktransactionhistoryGet2$Params, context?: HttpContext): Observable<EntityModelBookTransactionHistory> {
    return this.executeSearchBooktransactionhistoryGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBookTransactionHistory>): EntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `executeSearchBooktransactionhistoryGet3()` */
  static readonly ExecuteSearchBooktransactionhistoryGet3Path = '/bookTransactionHistories/search/findByBookIdAndUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchBooktransactionhistoryGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet3$Response(params?: ExecuteSearchBooktransactionhistoryGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
    return executeSearchBooktransactionhistoryGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchBooktransactionhistoryGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet3(params?: ExecuteSearchBooktransactionhistoryGet3$Params, context?: HttpContext): Observable<EntityModelBookTransactionHistory> {
    return this.executeSearchBooktransactionhistoryGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBookTransactionHistory>): EntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `executeSearchBooktransactionhistoryGet4()` */
  static readonly ExecuteSearchBooktransactionhistoryGet4Path = '/bookTransactionHistories/search/isAlreadyBorrowedByUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchBooktransactionhistoryGet4()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet4$Response(params?: ExecuteSearchBooktransactionhistoryGet4$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return executeSearchBooktransactionhistoryGet4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchBooktransactionhistoryGet4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchBooktransactionhistoryGet4(params?: ExecuteSearchBooktransactionhistoryGet4$Params, context?: HttpContext): Observable<boolean> {
    return this.executeSearchBooktransactionhistoryGet4$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
