/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceFeedbackPatch$Json } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-patch-json';
import { CreatePropertyReferenceFeedbackPatch$Json$Params } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-patch-json';
import { createPropertyReferenceFeedbackPatch$UriList } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-patch-uri-list';
import { CreatePropertyReferenceFeedbackPatch$UriList$Params } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-patch-uri-list';
import { createPropertyReferenceFeedbackPut$Json } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-put-json';
import { CreatePropertyReferenceFeedbackPut$Json$Params } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-put-json';
import { createPropertyReferenceFeedbackPut$UriList } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-put-uri-list';
import { CreatePropertyReferenceFeedbackPut$UriList$Params } from '../fn/feedback-property-reference-controller/create-property-reference-feedback-put-uri-list';
import { deletePropertyReferenceFeedbackDelete } from '../fn/feedback-property-reference-controller/delete-property-reference-feedback-delete';
import { DeletePropertyReferenceFeedbackDelete$Params } from '../fn/feedback-property-reference-controller/delete-property-reference-feedback-delete';
import { deletePropertyReferenceIdFeedbackDelete } from '../fn/feedback-property-reference-controller/delete-property-reference-id-feedback-delete';
import { DeletePropertyReferenceIdFeedbackDelete$Params } from '../fn/feedback-property-reference-controller/delete-property-reference-id-feedback-delete';
import { EntityModelBook } from '../models/entity-model-book';
import { followPropertyReferenceFeedbackGet } from '../fn/feedback-property-reference-controller/follow-property-reference-feedback-get';
import { FollowPropertyReferenceFeedbackGet$Params } from '../fn/feedback-property-reference-controller/follow-property-reference-feedback-get';
import { followPropertyReferenceFeedbackGet1$Json } from '../fn/feedback-property-reference-controller/follow-property-reference-feedback-get-1-json';
import { FollowPropertyReferenceFeedbackGet1$Json$Params } from '../fn/feedback-property-reference-controller/follow-property-reference-feedback-get-1-json';
import { followPropertyReferenceFeedbackGet1$UriList } from '../fn/feedback-property-reference-controller/follow-property-reference-feedback-get-1-uri-list';
import { FollowPropertyReferenceFeedbackGet1$UriList$Params } from '../fn/feedback-property-reference-controller/follow-property-reference-feedback-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class FeedbackPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceFeedbackGet1()` */
  static readonly FollowPropertyReferenceFeedbackGet1Path = '/feedbacks/{id}/book';

  /**
   * get-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFeedbackGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFeedbackGet1$Json$Response(params: FollowPropertyReferenceFeedbackGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return followPropertyReferenceFeedbackGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFeedbackGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFeedbackGet1$Json(params: FollowPropertyReferenceFeedbackGet1$Json$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.followPropertyReferenceFeedbackGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /**
   * get-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFeedbackGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFeedbackGet1$UriList$Response(params: FollowPropertyReferenceFeedbackGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceFeedbackGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFeedbackGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFeedbackGet1$UriList(params: FollowPropertyReferenceFeedbackGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceFeedbackGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceFeedbackPut()` */
  static readonly CreatePropertyReferenceFeedbackPutPath = '/feedbacks/{id}/book';

  /**
   * update-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFeedbackPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFeedbackPut$Json$Response(params: CreatePropertyReferenceFeedbackPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceFeedbackPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFeedbackPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFeedbackPut$Json(params: CreatePropertyReferenceFeedbackPut$Json$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceFeedbackPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /**
   * update-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFeedbackPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFeedbackPut$UriList$Response(params: CreatePropertyReferenceFeedbackPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceFeedbackPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFeedbackPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFeedbackPut$UriList(params: CreatePropertyReferenceFeedbackPut$UriList$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceFeedbackPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceFeedbackDelete()` */
  static readonly DeletePropertyReferenceFeedbackDeletePath = '/feedbacks/{id}/book';

  /**
   * delete-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceFeedbackDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFeedbackDelete$Response(params: DeletePropertyReferenceFeedbackDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceFeedbackDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceFeedbackDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceFeedbackDelete(params: DeletePropertyReferenceFeedbackDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceFeedbackDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceFeedbackPatch()` */
  static readonly CreatePropertyReferenceFeedbackPatchPath = '/feedbacks/{id}/book';

  /**
   * patch-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFeedbackPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFeedbackPatch$Json$Response(params: CreatePropertyReferenceFeedbackPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceFeedbackPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFeedbackPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceFeedbackPatch$Json(params: CreatePropertyReferenceFeedbackPatch$Json$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceFeedbackPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /**
   * patch-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceFeedbackPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFeedbackPatch$UriList$Response(params: CreatePropertyReferenceFeedbackPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return createPropertyReferenceFeedbackPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceFeedbackPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceFeedbackPatch$UriList(params: CreatePropertyReferenceFeedbackPatch$UriList$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.createPropertyReferenceFeedbackPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceFeedbackGet()` */
  static readonly FollowPropertyReferenceFeedbackGetPath = '/feedbacks/{id}/book/{propertyId}';

  /**
   * get-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceFeedbackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFeedbackGet$Response(params: FollowPropertyReferenceFeedbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return followPropertyReferenceFeedbackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceFeedbackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceFeedbackGet(params: FollowPropertyReferenceFeedbackGet$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.followPropertyReferenceFeedbackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdFeedbackDelete()` */
  static readonly DeletePropertyReferenceIdFeedbackDeletePath = '/feedbacks/{id}/book/{propertyId}';

  /**
   * delete-book-by-feedback-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdFeedbackDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFeedbackDelete$Response(params: DeletePropertyReferenceIdFeedbackDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdFeedbackDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-book-by-feedback-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdFeedbackDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdFeedbackDelete(params: DeletePropertyReferenceIdFeedbackDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdFeedbackDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
