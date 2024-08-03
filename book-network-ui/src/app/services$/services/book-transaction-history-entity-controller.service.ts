/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceBooktransactionhistoryDelete } from '../fn/book-transaction-history-entity-controller/delete-item-resource-booktransactionhistory-delete';
import { DeleteItemResourceBooktransactionhistoryDelete$Params } from '../fn/book-transaction-history-entity-controller/delete-item-resource-booktransactionhistory-delete';
import { EntityModelBookTransactionHistory } from '../models/entity-model-book-transaction-history';
import { getCollectionResourceBooktransactionhistoryGet1$Json } from '../fn/book-transaction-history-entity-controller/get-collection-resource-booktransactionhistory-get-1-json';
import { GetCollectionResourceBooktransactionhistoryGet1$Json$Params } from '../fn/book-transaction-history-entity-controller/get-collection-resource-booktransactionhistory-get-1-json';
import { getCollectionResourceBooktransactionhistoryGet1$UriList } from '../fn/book-transaction-history-entity-controller/get-collection-resource-booktransactionhistory-get-1-uri-list';
import { GetCollectionResourceBooktransactionhistoryGet1$UriList$Params } from '../fn/book-transaction-history-entity-controller/get-collection-resource-booktransactionhistory-get-1-uri-list';
import { getItemResourceBooktransactionhistoryGet } from '../fn/book-transaction-history-entity-controller/get-item-resource-booktransactionhistory-get';
import { GetItemResourceBooktransactionhistoryGet$Params } from '../fn/book-transaction-history-entity-controller/get-item-resource-booktransactionhistory-get';
import { PagedModelEntityModelBookTransactionHistory } from '../models/paged-model-entity-model-book-transaction-history';
import { patchItemResourceBooktransactionhistoryPatch } from '../fn/book-transaction-history-entity-controller/patch-item-resource-booktransactionhistory-patch';
import { PatchItemResourceBooktransactionhistoryPatch$Params } from '../fn/book-transaction-history-entity-controller/patch-item-resource-booktransactionhistory-patch';
import { postCollectionResourceBooktransactionhistoryPost } from '../fn/book-transaction-history-entity-controller/post-collection-resource-booktransactionhistory-post';
import { PostCollectionResourceBooktransactionhistoryPost$Params } from '../fn/book-transaction-history-entity-controller/post-collection-resource-booktransactionhistory-post';
import { putItemResourceBooktransactionhistoryPut } from '../fn/book-transaction-history-entity-controller/put-item-resource-booktransactionhistory-put';
import { PutItemResourceBooktransactionhistoryPut$Params } from '../fn/book-transaction-history-entity-controller/put-item-resource-booktransactionhistory-put';

@Injectable({ providedIn: 'root' })
export class BookTransactionHistoryEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceBooktransactionhistoryGet1()` */
  static readonly GetCollectionResourceBooktransactionhistoryGet1Path = '/bookTransactionHistories';

  /**
   * get-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceBooktransactionhistoryGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBooktransactionhistoryGet1$Json$Response(params?: GetCollectionResourceBooktransactionhistoryGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>> {
    return getCollectionResourceBooktransactionhistoryGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceBooktransactionhistoryGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBooktransactionhistoryGet1$Json(params?: GetCollectionResourceBooktransactionhistoryGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelBookTransactionHistory> {
    return this.getCollectionResourceBooktransactionhistoryGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelBookTransactionHistory>): PagedModelEntityModelBookTransactionHistory => r.body)
    );
  }

  /**
   * get-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceBooktransactionhistoryGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBooktransactionhistoryGet1$UriList$Response(params?: GetCollectionResourceBooktransactionhistoryGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceBooktransactionhistoryGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceBooktransactionhistoryGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBooktransactionhistoryGet1$UriList(params?: GetCollectionResourceBooktransactionhistoryGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceBooktransactionhistoryGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceBooktransactionhistoryPost()` */
  static readonly PostCollectionResourceBooktransactionhistoryPostPath = '/bookTransactionHistories';

  /**
   * create-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceBooktransactionhistoryPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceBooktransactionhistoryPost$Response(params: PostCollectionResourceBooktransactionhistoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
    return postCollectionResourceBooktransactionhistoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceBooktransactionhistoryPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceBooktransactionhistoryPost(params: PostCollectionResourceBooktransactionhistoryPost$Params, context?: HttpContext): Observable<EntityModelBookTransactionHistory> {
    return this.postCollectionResourceBooktransactionhistoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBookTransactionHistory>): EntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `getItemResourceBooktransactionhistoryGet()` */
  static readonly GetItemResourceBooktransactionhistoryGetPath = '/bookTransactionHistories/{id}';

  /**
   * get-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceBooktransactionhistoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceBooktransactionhistoryGet$Response(params: GetItemResourceBooktransactionhistoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
    return getItemResourceBooktransactionhistoryGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceBooktransactionhistoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceBooktransactionhistoryGet(params: GetItemResourceBooktransactionhistoryGet$Params, context?: HttpContext): Observable<EntityModelBookTransactionHistory> {
    return this.getItemResourceBooktransactionhistoryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBookTransactionHistory>): EntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `putItemResourceBooktransactionhistoryPut()` */
  static readonly PutItemResourceBooktransactionhistoryPutPath = '/bookTransactionHistories/{id}';

  /**
   * update-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceBooktransactionhistoryPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceBooktransactionhistoryPut$Response(params: PutItemResourceBooktransactionhistoryPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
    return putItemResourceBooktransactionhistoryPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceBooktransactionhistoryPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceBooktransactionhistoryPut(params: PutItemResourceBooktransactionhistoryPut$Params, context?: HttpContext): Observable<EntityModelBookTransactionHistory> {
    return this.putItemResourceBooktransactionhistoryPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBookTransactionHistory>): EntityModelBookTransactionHistory => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceBooktransactionhistoryDelete()` */
  static readonly DeleteItemResourceBooktransactionhistoryDeletePath = '/bookTransactionHistories/{id}';

  /**
   * delete-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceBooktransactionhistoryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceBooktransactionhistoryDelete$Response(params: DeleteItemResourceBooktransactionhistoryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceBooktransactionhistoryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceBooktransactionhistoryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceBooktransactionhistoryDelete(params: DeleteItemResourceBooktransactionhistoryDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceBooktransactionhistoryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceBooktransactionhistoryPatch()` */
  static readonly PatchItemResourceBooktransactionhistoryPatchPath = '/bookTransactionHistories/{id}';

  /**
   * patch-booktransactionhistory
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceBooktransactionhistoryPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceBooktransactionhistoryPatch$Response(params: PatchItemResourceBooktransactionhistoryPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBookTransactionHistory>> {
    return patchItemResourceBooktransactionhistoryPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-booktransactionhistory
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceBooktransactionhistoryPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceBooktransactionhistoryPatch(params: PatchItemResourceBooktransactionhistoryPatch$Params, context?: HttpContext): Observable<EntityModelBookTransactionHistory> {
    return this.patchItemResourceBooktransactionhistoryPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBookTransactionHistory>): EntityModelBookTransactionHistory => r.body)
    );
  }

}
