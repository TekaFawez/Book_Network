/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceFeedbackDelete } from '../fn/feedback-entity-controller/delete-item-resource-feedback-delete';
import { DeleteItemResourceFeedbackDelete$Params } from '../fn/feedback-entity-controller/delete-item-resource-feedback-delete';
import { EntityModelFeedback } from '../models/entity-model-feedback';
import { getCollectionResourceFeedbackGet1$Json } from '../fn/feedback-entity-controller/get-collection-resource-feedback-get-1-json';
import { GetCollectionResourceFeedbackGet1$Json$Params } from '../fn/feedback-entity-controller/get-collection-resource-feedback-get-1-json';
import { getCollectionResourceFeedbackGet1$UriList } from '../fn/feedback-entity-controller/get-collection-resource-feedback-get-1-uri-list';
import { GetCollectionResourceFeedbackGet1$UriList$Params } from '../fn/feedback-entity-controller/get-collection-resource-feedback-get-1-uri-list';
import { getItemResourceFeedbackGet } from '../fn/feedback-entity-controller/get-item-resource-feedback-get';
import { GetItemResourceFeedbackGet$Params } from '../fn/feedback-entity-controller/get-item-resource-feedback-get';
import { PagedModelEntityModelFeedback } from '../models/paged-model-entity-model-feedback';
import { patchItemResourceFeedbackPatch } from '../fn/feedback-entity-controller/patch-item-resource-feedback-patch';
import { PatchItemResourceFeedbackPatch$Params } from '../fn/feedback-entity-controller/patch-item-resource-feedback-patch';
import { postCollectionResourceFeedbackPost } from '../fn/feedback-entity-controller/post-collection-resource-feedback-post';
import { PostCollectionResourceFeedbackPost$Params } from '../fn/feedback-entity-controller/post-collection-resource-feedback-post';
import { putItemResourceFeedbackPut } from '../fn/feedback-entity-controller/put-item-resource-feedback-put';
import { PutItemResourceFeedbackPut$Params } from '../fn/feedback-entity-controller/put-item-resource-feedback-put';

@Injectable({ providedIn: 'root' })
export class FeedbackEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceFeedbackGet1()` */
  static readonly GetCollectionResourceFeedbackGet1Path = '/feedbacks';

  /**
   * get-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFeedbackGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFeedbackGet1$Json$Response(params?: GetCollectionResourceFeedbackGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelFeedback>> {
    return getCollectionResourceFeedbackGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFeedbackGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFeedbackGet1$Json(params?: GetCollectionResourceFeedbackGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelFeedback> {
    return this.getCollectionResourceFeedbackGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelFeedback>): PagedModelEntityModelFeedback => r.body)
    );
  }

  /**
   * get-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFeedbackGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFeedbackGet1$UriList$Response(params?: GetCollectionResourceFeedbackGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceFeedbackGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFeedbackGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFeedbackGet1$UriList(params?: GetCollectionResourceFeedbackGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceFeedbackGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceFeedbackPost()` */
  static readonly PostCollectionResourceFeedbackPostPath = '/feedbacks';

  /**
   * create-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceFeedbackPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFeedbackPost$Response(params: PostCollectionResourceFeedbackPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFeedback>> {
    return postCollectionResourceFeedbackPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceFeedbackPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFeedbackPost(params: PostCollectionResourceFeedbackPost$Params, context?: HttpContext): Observable<EntityModelFeedback> {
    return this.postCollectionResourceFeedbackPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFeedback>): EntityModelFeedback => r.body)
    );
  }

  /** Path part for operation `getItemResourceFeedbackGet()` */
  static readonly GetItemResourceFeedbackGetPath = '/feedbacks/{id}';

  /**
   * get-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceFeedbackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFeedbackGet$Response(params: GetItemResourceFeedbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFeedback>> {
    return getItemResourceFeedbackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceFeedbackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFeedbackGet(params: GetItemResourceFeedbackGet$Params, context?: HttpContext): Observable<EntityModelFeedback> {
    return this.getItemResourceFeedbackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFeedback>): EntityModelFeedback => r.body)
    );
  }

  /** Path part for operation `putItemResourceFeedbackPut()` */
  static readonly PutItemResourceFeedbackPutPath = '/feedbacks/{id}';

  /**
   * update-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceFeedbackPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFeedbackPut$Response(params: PutItemResourceFeedbackPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFeedback>> {
    return putItemResourceFeedbackPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceFeedbackPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFeedbackPut(params: PutItemResourceFeedbackPut$Params, context?: HttpContext): Observable<EntityModelFeedback> {
    return this.putItemResourceFeedbackPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFeedback>): EntityModelFeedback => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceFeedbackDelete()` */
  static readonly DeleteItemResourceFeedbackDeletePath = '/feedbacks/{id}';

  /**
   * delete-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceFeedbackDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFeedbackDelete$Response(params: DeleteItemResourceFeedbackDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceFeedbackDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceFeedbackDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFeedbackDelete(params: DeleteItemResourceFeedbackDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceFeedbackDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceFeedbackPatch()` */
  static readonly PatchItemResourceFeedbackPatchPath = '/feedbacks/{id}';

  /**
   * patch-feedback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceFeedbackPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFeedbackPatch$Response(params: PatchItemResourceFeedbackPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFeedback>> {
    return patchItemResourceFeedbackPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-feedback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceFeedbackPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFeedbackPatch(params: PatchItemResourceFeedbackPatch$Params, context?: HttpContext): Observable<EntityModelFeedback> {
    return this.patchItemResourceFeedbackPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFeedback>): EntityModelFeedback => r.body)
    );
  }

}
