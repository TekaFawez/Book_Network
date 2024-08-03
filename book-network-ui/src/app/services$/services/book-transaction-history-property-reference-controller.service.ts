/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceBooktransactionhistoryPatch$Json } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-json';
import { CreatePropertyReferenceBooktransactionhistoryPatch$Json$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-json';
import { createPropertyReferenceBooktransactionhistoryPatch$UriList } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-uri-list';
import { CreatePropertyReferenceBooktransactionhistoryPatch$UriList$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-uri-list';
import { createPropertyReferenceBooktransactionhistoryPatch1$Json } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-1-json';
import { CreatePropertyReferenceBooktransactionhistoryPatch1$Json$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-1-json';
import { createPropertyReferenceBooktransactionhistoryPatch1$UriList } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-1-uri-list';
import { CreatePropertyReferenceBooktransactionhistoryPatch1$UriList$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-patch-1-uri-list';
import { createPropertyReferenceBooktransactionhistoryPut$Json } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-json';
import { CreatePropertyReferenceBooktransactionhistoryPut$Json$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-json';
import { createPropertyReferenceBooktransactionhistoryPut$UriList } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-uri-list';
import { CreatePropertyReferenceBooktransactionhistoryPut$UriList$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-uri-list';
import { createPropertyReferenceBooktransactionhistoryPut1$Json } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-1-json';
import { CreatePropertyReferenceBooktransactionhistoryPut1$Json$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-1-json';
import { createPropertyReferenceBooktransactionhistoryPut1$UriList } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-1-uri-list';
import { CreatePropertyReferenceBooktransactionhistoryPut1$UriList$Params } from '../fn/book-transaction-history-property-reference-controller/create-property-reference-booktransactionhistory-put-1-uri-list';
import { deletePropertyReferenceBooktransactionhistoryDelete } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-booktransactionhistory-delete';
import { DeletePropertyReferenceBooktransactionhistoryDelete$Params } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-booktransactionhistory-delete';
import { deletePropertyReferenceBooktransactionhistoryDelete1 } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-booktransactionhistory-delete-1';
import { DeletePropertyReferenceBooktransactionhistoryDelete1$Params } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-booktransactionhistory-delete-1';
import { deletePropertyReferenceIdBooktransactionhistoryDelete } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-id-booktransactionhistory-delete';
import { DeletePropertyReferenceIdBooktransactionhistoryDelete$Params } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-id-booktransactionhistory-delete';
import { deletePropertyReferenceIdBooktransactionhistoryDelete1 } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-id-booktransactionhistory-delete-1';
import { DeletePropertyReferenceIdBooktransactionhistoryDelete1$Params } from '../fn/book-transaction-history-property-reference-controller/delete-property-reference-id-booktransactionhistory-delete-1';
import { EntityModelBook } from '../models/entity-model-book';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceBooktransactionhistoryGet } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get';
import { FollowPropertyReferenceBooktransactionhistoryGet$Params } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get';
import { followPropertyReferenceBooktransactionhistoryGet1$Json } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-1-json';
import { FollowPropertyReferenceBooktransactionhistoryGet1$Json$Params } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-1-json';
import { followPropertyReferenceBooktransactionhistoryGet1$UriList } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-1-uri-list';
import { FollowPropertyReferenceBooktransactionhistoryGet1$UriList$Params } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-1-uri-list';
import { followPropertyReferenceBooktransactionhistoryGet2 } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-2';
import { FollowPropertyReferenceBooktransactionhistoryGet2$Params } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-2';
import { followPropertyReferenceBooktransactionhistoryGet21$Json } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-21-json';
import { FollowPropertyReferenceBooktransactionhistoryGet21$Json$Params } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-21-json';
import { followPropertyReferenceBooktransactionhistoryGet21$UriList } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-21-uri-list';
import { FollowPropertyReferenceBooktransactionhistoryGet21$UriList$Params } from '../fn/book-transaction-history-property-reference-controller/follow-property-reference-booktransactionhistory-get-21-uri-list';

@Injectable({ providedIn: 'root' })
export class BookTransactionHistoryPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceBooktransactionhistoryGet1()` */
  static readonly FollowPropertyReferenceBooktransactionhistoryGet1Path = '/bookTransactionHistories/{id}/book';

  /**
   * get-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBooktransactionhistoryGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet1$Json$Response(params: FollowPropertyReferenceBooktransactionhistoryGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return followPropertyReferenceBooktransactionhistoryGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBooktransactionhistoryGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet1$Json(params: FollowPropertyReferenceBooktransactionhistoryGet1$Json$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.followPropertyReferenceBooktransactionhistoryGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /**
   * get-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBooktransactionhistoryGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet1$UriList$Response(params: FollowPropertyReferenceBooktransactionhistoryGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceBooktransactionhistoryGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBooktransactionhistoryGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet1$UriList(params: FollowPropertyReferenceBooktransactionhistoryGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceBooktransactionhistoryGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBooktransactionhistoryPut()` */
  static readonly CreatePropertyReferenceBooktransactionhistoryPutPath = '/bookTransactionHistories/{id}/book';

  /**
   * update-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPut$Json$Response(params: CreatePropertyReferenceBooktransactionhistoryPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceBooktransactionhistoryPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPut$Json(params: CreatePropertyReferenceBooktransactionhistoryPut$Json$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceBooktransactionhistoryPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /**
   * update-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPut$UriList$Response(params: CreatePropertyReferenceBooktransactionhistoryPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceBooktransactionhistoryPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPut$UriList(params: CreatePropertyReferenceBooktransactionhistoryPut$UriList$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceBooktransactionhistoryPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceBooktransactionhistoryDelete()` */
  static readonly DeletePropertyReferenceBooktransactionhistoryDeletePath = '/bookTransactionHistories/{id}/book';

  /**
   * delete-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceBooktransactionhistoryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBooktransactionhistoryDelete$Response(params: DeletePropertyReferenceBooktransactionhistoryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceBooktransactionhistoryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceBooktransactionhistoryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBooktransactionhistoryDelete(params: DeletePropertyReferenceBooktransactionhistoryDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceBooktransactionhistoryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBooktransactionhistoryPatch()` */
  static readonly CreatePropertyReferenceBooktransactionhistoryPatchPath = '/bookTransactionHistories/{id}/book';

  /**
   * patch-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPatch$Json$Response(params: CreatePropertyReferenceBooktransactionhistoryPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceBooktransactionhistoryPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPatch$Json(params: CreatePropertyReferenceBooktransactionhistoryPatch$Json$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceBooktransactionhistoryPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /**
   * patch-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPatch$UriList$Response(params: CreatePropertyReferenceBooktransactionhistoryPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceBooktransactionhistoryPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPatch$UriList(params: CreatePropertyReferenceBooktransactionhistoryPatch$UriList$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceBooktransactionhistoryPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBooktransactionhistoryGet()` */
  static readonly FollowPropertyReferenceBooktransactionhistoryGetPath = '/bookTransactionHistories/{id}/book/{propertyId}';

  /**
   * get-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBooktransactionhistoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet$Response(params: FollowPropertyReferenceBooktransactionhistoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return followPropertyReferenceBooktransactionhistoryGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBooktransactionhistoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet(params: FollowPropertyReferenceBooktransactionhistoryGet$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.followPropertyReferenceBooktransactionhistoryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdBooktransactionhistoryDelete()` */
  static readonly DeletePropertyReferenceIdBooktransactionhistoryDeletePath = '/bookTransactionHistories/{id}/book/{propertyId}';

  /**
   * delete-book-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdBooktransactionhistoryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBooktransactionhistoryDelete$Response(params: DeletePropertyReferenceIdBooktransactionhistoryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdBooktransactionhistoryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-book-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdBooktransactionhistoryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBooktransactionhistoryDelete(params: DeletePropertyReferenceIdBooktransactionhistoryDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdBooktransactionhistoryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBooktransactionhistoryGet21()` */
  static readonly FollowPropertyReferenceBooktransactionhistoryGet21Path = '/bookTransactionHistories/{id}/user';

  /**
   * get-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBooktransactionhistoryGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet21$Json$Response(params: FollowPropertyReferenceBooktransactionhistoryGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceBooktransactionhistoryGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBooktransactionhistoryGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet21$Json(params: FollowPropertyReferenceBooktransactionhistoryGet21$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceBooktransactionhistoryGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBooktransactionhistoryGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet21$UriList$Response(params: FollowPropertyReferenceBooktransactionhistoryGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceBooktransactionhistoryGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBooktransactionhistoryGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet21$UriList(params: FollowPropertyReferenceBooktransactionhistoryGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceBooktransactionhistoryGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBooktransactionhistoryPut1()` */
  static readonly CreatePropertyReferenceBooktransactionhistoryPut1Path = '/bookTransactionHistories/{id}/user';

  /**
   * update-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPut1$Json$Response(params: CreatePropertyReferenceBooktransactionhistoryPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBooktransactionhistoryPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPut1$Json(params: CreatePropertyReferenceBooktransactionhistoryPut1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBooktransactionhistoryPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPut1$UriList$Response(params: CreatePropertyReferenceBooktransactionhistoryPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBooktransactionhistoryPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPut1$UriList(params: CreatePropertyReferenceBooktransactionhistoryPut1$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBooktransactionhistoryPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceBooktransactionhistoryDelete1()` */
  static readonly DeletePropertyReferenceBooktransactionhistoryDelete1Path = '/bookTransactionHistories/{id}/user';

  /**
   * delete-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceBooktransactionhistoryDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBooktransactionhistoryDelete1$Response(params: DeletePropertyReferenceBooktransactionhistoryDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceBooktransactionhistoryDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceBooktransactionhistoryDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBooktransactionhistoryDelete1(params: DeletePropertyReferenceBooktransactionhistoryDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceBooktransactionhistoryDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBooktransactionhistoryPatch1()` */
  static readonly CreatePropertyReferenceBooktransactionhistoryPatch1Path = '/bookTransactionHistories/{id}/user';

  /**
   * patch-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPatch1$Json$Response(params: CreatePropertyReferenceBooktransactionhistoryPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBooktransactionhistoryPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBooktransactionhistoryPatch1$Json(params: CreatePropertyReferenceBooktransactionhistoryPatch1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBooktransactionhistoryPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBooktransactionhistoryPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPatch1$UriList$Response(params: CreatePropertyReferenceBooktransactionhistoryPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBooktransactionhistoryPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBooktransactionhistoryPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBooktransactionhistoryPatch1$UriList(params: CreatePropertyReferenceBooktransactionhistoryPatch1$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBooktransactionhistoryPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBooktransactionhistoryGet2()` */
  static readonly FollowPropertyReferenceBooktransactionhistoryGet2Path = '/bookTransactionHistories/{id}/user/{propertyId}';

  /**
   * get-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBooktransactionhistoryGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet2$Response(params: FollowPropertyReferenceBooktransactionhistoryGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceBooktransactionhistoryGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBooktransactionhistoryGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBooktransactionhistoryGet2(params: FollowPropertyReferenceBooktransactionhistoryGet2$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceBooktransactionhistoryGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdBooktransactionhistoryDelete1()` */
  static readonly DeletePropertyReferenceIdBooktransactionhistoryDelete1Path = '/bookTransactionHistories/{id}/user/{propertyId}';

  /**
   * delete-user-by-booktransactionhistory-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdBooktransactionhistoryDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBooktransactionhistoryDelete1$Response(params: DeletePropertyReferenceIdBooktransactionhistoryDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdBooktransactionhistoryDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-booktransactionhistory-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdBooktransactionhistoryDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBooktransactionhistoryDelete1(params: DeletePropertyReferenceIdBooktransactionhistoryDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdBooktransactionhistoryDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
