/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelBookTransactionHistory } from '../models/collection-model-book-transaction-history';
import { CollectionModelFeedback } from '../models/collection-model-feedback';
import { createPropertyReferenceBookPatch$Json } from '../fn/book-property-reference-controller/create-property-reference-book-patch-json';
import { CreatePropertyReferenceBookPatch$Json$Params } from '../fn/book-property-reference-controller/create-property-reference-book-patch-json';
import { createPropertyReferenceBookPatch$UriList } from '../fn/book-property-reference-controller/create-property-reference-book-patch-uri-list';
import { CreatePropertyReferenceBookPatch$UriList$Params } from '../fn/book-property-reference-controller/create-property-reference-book-patch-uri-list';
import { createPropertyReferenceBookPatch1$Json } from '../fn/book-property-reference-controller/create-property-reference-book-patch-1-json';
import { CreatePropertyReferenceBookPatch1$Json$Params } from '../fn/book-property-reference-controller/create-property-reference-book-patch-1-json';
import { createPropertyReferenceBookPatch1$UriList } from '../fn/book-property-reference-controller/create-property-reference-book-patch-1-uri-list';
import { CreatePropertyReferenceBookPatch1$UriList$Params } from '../fn/book-property-reference-controller/create-property-reference-book-patch-1-uri-list';
import { createPropertyReferenceBookPatch2$Json } from '../fn/book-property-reference-controller/create-property-reference-book-patch-2-json';
import { CreatePropertyReferenceBookPatch2$Json$Params } from '../fn/book-property-reference-controller/create-property-reference-book-patch-2-json';
import { createPropertyReferenceBookPatch2$UriList } from '../fn/book-property-reference-controller/create-property-reference-book-patch-2-uri-list';
import { CreatePropertyReferenceBookPatch2$UriList$Params } from '../fn/book-property-reference-controller/create-property-reference-book-patch-2-uri-list';
import { createPropertyReferenceBookPut$Json } from '../fn/book-property-reference-controller/create-property-reference-book-put-json';
import { CreatePropertyReferenceBookPut$Json$Params } from '../fn/book-property-reference-controller/create-property-reference-book-put-json';
import { createPropertyReferenceBookPut$UriList } from '../fn/book-property-reference-controller/create-property-reference-book-put-uri-list';
import { CreatePropertyReferenceBookPut$UriList$Params } from '../fn/book-property-reference-controller/create-property-reference-book-put-uri-list';
import { createPropertyReferenceBookPut1$Json } from '../fn/book-property-reference-controller/create-property-reference-book-put-1-json';
import { CreatePropertyReferenceBookPut1$Json$Params } from '../fn/book-property-reference-controller/create-property-reference-book-put-1-json';
import { createPropertyReferenceBookPut1$UriList } from '../fn/book-property-reference-controller/create-property-reference-book-put-1-uri-list';
import { CreatePropertyReferenceBookPut1$UriList$Params } from '../fn/book-property-reference-controller/create-property-reference-book-put-1-uri-list';
import { createPropertyReferenceBookPut2$Json } from '../fn/book-property-reference-controller/create-property-reference-book-put-2-json';
import { CreatePropertyReferenceBookPut2$Json$Params } from '../fn/book-property-reference-controller/create-property-reference-book-put-2-json';
import { createPropertyReferenceBookPut2$UriList } from '../fn/book-property-reference-controller/create-property-reference-book-put-2-uri-list';
import { CreatePropertyReferenceBookPut2$UriList$Params } from '../fn/book-property-reference-controller/create-property-reference-book-put-2-uri-list';
import { deletePropertyReferenceBookDelete } from '../fn/book-property-reference-controller/delete-property-reference-book-delete';
import { DeletePropertyReferenceBookDelete$Params } from '../fn/book-property-reference-controller/delete-property-reference-book-delete';
import { deletePropertyReferenceBookDelete1 } from '../fn/book-property-reference-controller/delete-property-reference-book-delete-1';
import { DeletePropertyReferenceBookDelete1$Params } from '../fn/book-property-reference-controller/delete-property-reference-book-delete-1';
import { deletePropertyReferenceBookDelete2 } from '../fn/book-property-reference-controller/delete-property-reference-book-delete-2';
import { DeletePropertyReferenceBookDelete2$Params } from '../fn/book-property-reference-controller/delete-property-reference-book-delete-2';
import { deletePropertyReferenceIdBookDelete } from '../fn/book-property-reference-controller/delete-property-reference-id-book-delete';
import { DeletePropertyReferenceIdBookDelete$Params } from '../fn/book-property-reference-controller/delete-property-reference-id-book-delete';
import { deletePropertyReferenceIdBookDelete1 } from '../fn/book-property-reference-controller/delete-property-reference-id-book-delete-1';
import { DeletePropertyReferenceIdBookDelete1$Params } from '../fn/book-property-reference-controller/delete-property-reference-id-book-delete-1';
import { deletePropertyReferenceIdBookDelete2 } from '../fn/book-property-reference-controller/delete-property-reference-id-book-delete-2';
import { DeletePropertyReferenceIdBookDelete2$Params } from '../fn/book-property-reference-controller/delete-property-reference-id-book-delete-2';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceBookGet } from '../fn/book-property-reference-controller/follow-property-reference-book-get';
import { FollowPropertyReferenceBookGet$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get';
import { followPropertyReferenceBookGet1$Json } from '../fn/book-property-reference-controller/follow-property-reference-book-get-1-json';
import { FollowPropertyReferenceBookGet1$Json$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-1-json';
import { followPropertyReferenceBookGet1$UriList } from '../fn/book-property-reference-controller/follow-property-reference-book-get-1-uri-list';
import { FollowPropertyReferenceBookGet1$UriList$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-1-uri-list';
import { followPropertyReferenceBookGet2 } from '../fn/book-property-reference-controller/follow-property-reference-book-get-2';
import { FollowPropertyReferenceBookGet2$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-2';
import { followPropertyReferenceBookGet21$Json } from '../fn/book-property-reference-controller/follow-property-reference-book-get-21-json';
import { FollowPropertyReferenceBookGet21$Json$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-21-json';
import { followPropertyReferenceBookGet21$UriList } from '../fn/book-property-reference-controller/follow-property-reference-book-get-21-uri-list';
import { FollowPropertyReferenceBookGet21$UriList$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-21-uri-list';
import { followPropertyReferenceBookGet3 } from '../fn/book-property-reference-controller/follow-property-reference-book-get-3';
import { FollowPropertyReferenceBookGet3$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-3';
import { followPropertyReferenceBookGet31$Json } from '../fn/book-property-reference-controller/follow-property-reference-book-get-31-json';
import { FollowPropertyReferenceBookGet31$Json$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-31-json';
import { followPropertyReferenceBookGet31$UriList } from '../fn/book-property-reference-controller/follow-property-reference-book-get-31-uri-list';
import { FollowPropertyReferenceBookGet31$UriList$Params } from '../fn/book-property-reference-controller/follow-property-reference-book-get-31-uri-list';

@Injectable({ providedIn: 'root' })
export class BookPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceBookGet1()` */
  static readonly FollowPropertyReferenceBookGet1Path = '/books/{id}/feedbacks';

  /**
   * get-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet1$Json$Response(params: FollowPropertyReferenceBookGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
    return followPropertyReferenceBookGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet1$Json(params: FollowPropertyReferenceBookGet1$Json$Params, context?: HttpContext): Observable<CollectionModelFeedback> {
    return this.followPropertyReferenceBookGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFeedback>): CollectionModelFeedback => r.body)
    );
  }

  /**
   * get-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet1$UriList$Response(params: FollowPropertyReferenceBookGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceBookGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet1$UriList(params: FollowPropertyReferenceBookGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceBookGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBookPut()` */
  static readonly CreatePropertyReferenceBookPutPath = '/books/{id}/feedbacks';

  /**
   * update-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPut$Json$Response(params: CreatePropertyReferenceBookPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
    return createPropertyReferenceBookPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPut$Json(params: CreatePropertyReferenceBookPut$Json$Params, context?: HttpContext): Observable<CollectionModelFeedback> {
    return this.createPropertyReferenceBookPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFeedback>): CollectionModelFeedback => r.body)
    );
  }

  /**
   * update-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPut$UriList$Response(params: CreatePropertyReferenceBookPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
    return createPropertyReferenceBookPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPut$UriList(params: CreatePropertyReferenceBookPut$UriList$Params, context?: HttpContext): Observable<CollectionModelFeedback> {
    return this.createPropertyReferenceBookPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFeedback>): CollectionModelFeedback => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceBookDelete()` */
  static readonly DeletePropertyReferenceBookDeletePath = '/books/{id}/feedbacks';

  /**
   * delete-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceBookDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBookDelete$Response(params: DeletePropertyReferenceBookDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceBookDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceBookDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBookDelete(params: DeletePropertyReferenceBookDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceBookDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBookPatch()` */
  static readonly CreatePropertyReferenceBookPatchPath = '/books/{id}/feedbacks';

  /**
   * patch-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPatch$Json$Response(params: CreatePropertyReferenceBookPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
    return createPropertyReferenceBookPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPatch$Json(params: CreatePropertyReferenceBookPatch$Json$Params, context?: HttpContext): Observable<CollectionModelFeedback> {
    return this.createPropertyReferenceBookPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFeedback>): CollectionModelFeedback => r.body)
    );
  }

  /**
   * patch-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPatch$UriList$Response(params: CreatePropertyReferenceBookPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
    return createPropertyReferenceBookPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPatch$UriList(params: CreatePropertyReferenceBookPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelFeedback> {
    return this.createPropertyReferenceBookPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFeedback>): CollectionModelFeedback => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBookGet()` */
  static readonly FollowPropertyReferenceBookGetPath = '/books/{id}/feedbacks/{propertyId}';

  /**
   * get-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet$Response(params: FollowPropertyReferenceBookGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelFeedback>> {
    return followPropertyReferenceBookGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet(params: FollowPropertyReferenceBookGet$Params, context?: HttpContext): Observable<CollectionModelFeedback> {
    return this.followPropertyReferenceBookGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelFeedback>): CollectionModelFeedback => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdBookDelete()` */
  static readonly DeletePropertyReferenceIdBookDeletePath = '/books/{id}/feedbacks/{propertyId}';

  /**
   * delete-feedback-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdBookDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBookDelete$Response(params: DeletePropertyReferenceIdBookDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdBookDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-feedback-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdBookDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBookDelete(params: DeletePropertyReferenceIdBookDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdBookDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBookGet21()` */
  static readonly FollowPropertyReferenceBookGet21Path = '/books/{id}/histories';

  /**
   * get-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet21$Json$Response(params: FollowPropertyReferenceBookGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
    return followPropertyReferenceBookGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet21$Json(params: FollowPropertyReferenceBookGet21$Json$Params, context?: HttpContext): Observable<CollectionModelBookTransactionHistory> {
    return this.followPropertyReferenceBookGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelBookTransactionHistory>): CollectionModelBookTransactionHistory => r.body)
    );
  }

  /**
   * get-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet21$UriList$Response(params: FollowPropertyReferenceBookGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceBookGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet21$UriList(params: FollowPropertyReferenceBookGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceBookGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBookPut1()` */
  static readonly CreatePropertyReferenceBookPut1Path = '/books/{id}/histories';

  /**
   * update-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPut1$Json$Response(params: CreatePropertyReferenceBookPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
    return createPropertyReferenceBookPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPut1$Json(params: CreatePropertyReferenceBookPut1$Json$Params, context?: HttpContext): Observable<CollectionModelBookTransactionHistory> {
    return this.createPropertyReferenceBookPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelBookTransactionHistory>): CollectionModelBookTransactionHistory => r.body)
    );
  }

  /**
   * update-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPut1$UriList$Response(params: CreatePropertyReferenceBookPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
    return createPropertyReferenceBookPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPut1$UriList(params: CreatePropertyReferenceBookPut1$UriList$Params, context?: HttpContext): Observable<CollectionModelBookTransactionHistory> {
    return this.createPropertyReferenceBookPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelBookTransactionHistory>): CollectionModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceBookDelete1()` */
  static readonly DeletePropertyReferenceBookDelete1Path = '/books/{id}/histories';

  /**
   * delete-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceBookDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBookDelete1$Response(params: DeletePropertyReferenceBookDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceBookDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceBookDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBookDelete1(params: DeletePropertyReferenceBookDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceBookDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBookPatch1()` */
  static readonly CreatePropertyReferenceBookPatch1Path = '/books/{id}/histories';

  /**
   * patch-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPatch1$Json$Response(params: CreatePropertyReferenceBookPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
    return createPropertyReferenceBookPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPatch1$Json(params: CreatePropertyReferenceBookPatch1$Json$Params, context?: HttpContext): Observable<CollectionModelBookTransactionHistory> {
    return this.createPropertyReferenceBookPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelBookTransactionHistory>): CollectionModelBookTransactionHistory => r.body)
    );
  }

  /**
   * patch-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPatch1$UriList$Response(params: CreatePropertyReferenceBookPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
    return createPropertyReferenceBookPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPatch1$UriList(params: CreatePropertyReferenceBookPatch1$UriList$Params, context?: HttpContext): Observable<CollectionModelBookTransactionHistory> {
    return this.createPropertyReferenceBookPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelBookTransactionHistory>): CollectionModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBookGet2()` */
  static readonly FollowPropertyReferenceBookGet2Path = '/books/{id}/histories/{propertyId}';

  /**
   * get-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet2$Response(params: FollowPropertyReferenceBookGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelBookTransactionHistory>> {
    return followPropertyReferenceBookGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet2(params: FollowPropertyReferenceBookGet2$Params, context?: HttpContext): Observable<CollectionModelBookTransactionHistory> {
    return this.followPropertyReferenceBookGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelBookTransactionHistory>): CollectionModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdBookDelete1()` */
  static readonly DeletePropertyReferenceIdBookDelete1Path = '/books/{id}/histories/{propertyId}';

  /**
   * delete-booktransactionhistory-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdBookDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBookDelete1$Response(params: DeletePropertyReferenceIdBookDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdBookDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-booktransactionhistory-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdBookDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBookDelete1(params: DeletePropertyReferenceIdBookDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdBookDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBookGet31()` */
  static readonly FollowPropertyReferenceBookGet31Path = '/books/{id}/owner';

  /**
   * get-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet31$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet31$Json$Response(params: FollowPropertyReferenceBookGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceBookGet31$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet31$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet31$Json(params: FollowPropertyReferenceBookGet31$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceBookGet31$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet31$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet31$UriList$Response(params: FollowPropertyReferenceBookGet31$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceBookGet31$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet31$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet31$UriList(params: FollowPropertyReferenceBookGet31$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceBookGet31$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBookPut2()` */
  static readonly CreatePropertyReferenceBookPut2Path = '/books/{id}/owner';

  /**
   * update-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPut2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPut2$Json$Response(params: CreatePropertyReferenceBookPut2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBookPut2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPut2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPut2$Json(params: CreatePropertyReferenceBookPut2$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBookPut2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPut2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPut2$UriList$Response(params: CreatePropertyReferenceBookPut2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBookPut2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPut2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPut2$UriList(params: CreatePropertyReferenceBookPut2$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBookPut2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceBookDelete2()` */
  static readonly DeletePropertyReferenceBookDelete2Path = '/books/{id}/owner';

  /**
   * delete-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceBookDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBookDelete2$Response(params: DeletePropertyReferenceBookDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceBookDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceBookDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceBookDelete2(params: DeletePropertyReferenceBookDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceBookDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceBookPatch2()` */
  static readonly CreatePropertyReferenceBookPatch2Path = '/books/{id}/owner';

  /**
   * patch-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPatch2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPatch2$Json$Response(params: CreatePropertyReferenceBookPatch2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBookPatch2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPatch2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceBookPatch2$Json(params: CreatePropertyReferenceBookPatch2$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBookPatch2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceBookPatch2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPatch2$UriList$Response(params: CreatePropertyReferenceBookPatch2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceBookPatch2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceBookPatch2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceBookPatch2$UriList(params: CreatePropertyReferenceBookPatch2$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceBookPatch2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceBookGet3()` */
  static readonly FollowPropertyReferenceBookGet3Path = '/books/{id}/owner/{propertyId}';

  /**
   * get-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceBookGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet3$Response(params: FollowPropertyReferenceBookGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceBookGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceBookGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceBookGet3(params: FollowPropertyReferenceBookGet3$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceBookGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdBookDelete2()` */
  static readonly DeletePropertyReferenceIdBookDelete2Path = '/books/{id}/owner/{propertyId}';

  /**
   * delete-user-by-book-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdBookDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBookDelete2$Response(params: DeletePropertyReferenceIdBookDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdBookDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-book-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdBookDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdBookDelete2(params: DeletePropertyReferenceIdBookDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdBookDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
