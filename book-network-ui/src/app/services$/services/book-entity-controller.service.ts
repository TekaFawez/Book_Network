/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceBookDelete } from '../fn/book-entity-controller/delete-item-resource-book-delete';
import { DeleteItemResourceBookDelete$Params } from '../fn/book-entity-controller/delete-item-resource-book-delete';
import { EntityModelBook } from '../models/entity-model-book';
import { getCollectionResourceBookGet1$Json } from '../fn/book-entity-controller/get-collection-resource-book-get-1-json';
import { GetCollectionResourceBookGet1$Json$Params } from '../fn/book-entity-controller/get-collection-resource-book-get-1-json';
import { getCollectionResourceBookGet1$UriList } from '../fn/book-entity-controller/get-collection-resource-book-get-1-uri-list';
import { GetCollectionResourceBookGet1$UriList$Params } from '../fn/book-entity-controller/get-collection-resource-book-get-1-uri-list';
import { getItemResourceBookGet } from '../fn/book-entity-controller/get-item-resource-book-get';
import { GetItemResourceBookGet$Params } from '../fn/book-entity-controller/get-item-resource-book-get';
import { PagedModelEntityModelBook } from '../models/paged-model-entity-model-book';
import { patchItemResourceBookPatch } from '../fn/book-entity-controller/patch-item-resource-book-patch';
import { PatchItemResourceBookPatch$Params } from '../fn/book-entity-controller/patch-item-resource-book-patch';
import { postCollectionResourceBookPost1 } from '../fn/book/post-collection-resource-book-post-1';
import { PostCollectionResourceBookPost1$Params } from '../fn/book/post-collection-resource-book-post-1';
import { putItemResourceBookPut } from '../fn/book-entity-controller/put-item-resource-book-put';
import { PutItemResourceBookPut$Params } from '../fn/book-entity-controller/put-item-resource-book-put';

@Injectable({ providedIn: 'root' })
export class BookEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceBookGet1()` */
  static readonly GetCollectionResourceBookGet1Path = '/books';

  /**
   * get-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceBookGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBookGet1$Json$Response(params?: GetCollectionResourceBookGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelBook>> {
    return getCollectionResourceBookGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceBookGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBookGet1$Json(params?: GetCollectionResourceBookGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelBook> {
    return this.getCollectionResourceBookGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelBook>): PagedModelEntityModelBook => r.body)
    );
  }

  /**
   * get-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceBookGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBookGet1$UriList$Response(params?: GetCollectionResourceBookGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceBookGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceBookGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceBookGet1$UriList(params?: GetCollectionResourceBookGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceBookGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceBookPost1()` */
  static readonly PostCollectionResourceBookPost1Path = '/books';

  /**
   * Save a book.
   *
   * create-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceBookPost1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceBookPost1$Response(params: PostCollectionResourceBookPost1$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return postCollectionResourceBookPost1(this.http, this.rootUrl, params, context);
  }

  /**
   * Save a book.
   *
   * create-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceBookPost1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceBookPost1(params: PostCollectionResourceBookPost1$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.postCollectionResourceBookPost1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `getItemResourceBookGet()` */
  static readonly GetItemResourceBookGetPath = '/books/{id}';

  /**
   * get-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceBookGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceBookGet$Response(params: GetItemResourceBookGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return getItemResourceBookGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceBookGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceBookGet(params: GetItemResourceBookGet$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.getItemResourceBookGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `putItemResourceBookPut()` */
  static readonly PutItemResourceBookPutPath = '/books/{id}';

  /**
   * update-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceBookPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceBookPut$Response(params: PutItemResourceBookPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return putItemResourceBookPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceBookPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceBookPut(params: PutItemResourceBookPut$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.putItemResourceBookPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceBookDelete()` */
  static readonly DeleteItemResourceBookDeletePath = '/books/{id}';

  /**
   * delete-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceBookDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceBookDelete$Response(params: DeleteItemResourceBookDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceBookDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceBookDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceBookDelete(params: DeleteItemResourceBookDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceBookDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceBookPatch()` */
  static readonly PatchItemResourceBookPatchPath = '/books/{id}';

  /**
   * patch-book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceBookPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceBookPatch$Response(params: PatchItemResourceBookPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelBook>> {
    return patchItemResourceBookPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceBookPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceBookPatch(params: PatchItemResourceBookPatch$Params, context?: HttpContext): Observable<EntityModelBook> {
    return this.patchItemResourceBookPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelBook>): EntityModelBook => r.body)
    );
  }

}
