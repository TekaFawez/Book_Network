/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { descriptor111$Any } from '../fn/profile-controller/descriptor-111-any';
import { Descriptor111$Any$Params } from '../fn/profile-controller/descriptor-111-any';
import { descriptor111$Json } from '../fn/profile-controller/descriptor-111-json';
import { Descriptor111$Json$Params } from '../fn/profile-controller/descriptor-111-json';
import { descriptor112$Any } from '../fn/profile-controller/descriptor-112-any';
import { Descriptor112$Any$Params } from '../fn/profile-controller/descriptor-112-any';
import { descriptor112$Json } from '../fn/profile-controller/descriptor-112-json';
import { Descriptor112$Json$Params } from '../fn/profile-controller/descriptor-112-json';
import { descriptor113$Any } from '../fn/profile-controller/descriptor-113-any';
import { Descriptor113$Any$Params } from '../fn/profile-controller/descriptor-113-any';
import { descriptor113$Json } from '../fn/profile-controller/descriptor-113-json';
import { Descriptor113$Json$Params } from '../fn/profile-controller/descriptor-113-json';
import { descriptor114$Any } from '../fn/profile-controller/descriptor-114-any';
import { Descriptor114$Any$Params } from '../fn/profile-controller/descriptor-114-any';
import { descriptor114$Json } from '../fn/profile-controller/descriptor-114-json';
import { Descriptor114$Json$Params } from '../fn/profile-controller/descriptor-114-json';
import { descriptor115$Any } from '../fn/profile-controller/descriptor-115-any';
import { Descriptor115$Any$Params } from '../fn/profile-controller/descriptor-115-any';
import { descriptor115$Json } from '../fn/profile-controller/descriptor-115-json';
import { Descriptor115$Json$Params } from '../fn/profile-controller/descriptor-115-json';
import { descriptor116$Any } from '../fn/profile-controller/descriptor-116-any';
import { Descriptor116$Any$Params } from '../fn/profile-controller/descriptor-116-any';
import { descriptor116$Json } from '../fn/profile-controller/descriptor-116-json';
import { Descriptor116$Json$Params } from '../fn/profile-controller/descriptor-116-json';
import { JsonSchema } from '../models/json-schema';
import { listAllFormsOfMetadata1 } from '../fn/profile-controller/list-all-forms-of-metadata-1';
import { ListAllFormsOfMetadata1$Params } from '../fn/profile-controller/list-all-forms-of-metadata-1';
import { RepresentationModelObject } from '../models/representation-model-object';

@Injectable({ providedIn: 'root' })
export class ProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listAllFormsOfMetadata1()` */
  static readonly ListAllFormsOfMetadata1Path = '/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAllFormsOfMetadata1()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadata1$Response(params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<StrictHttpResponse<RepresentationModelObject>> {
    return listAllFormsOfMetadata1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAllFormsOfMetadata1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadata1(params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<RepresentationModelObject> {
    return this.listAllFormsOfMetadata1$Response(params, context).pipe(
      map((r: StrictHttpResponse<RepresentationModelObject>): RepresentationModelObject => r.body)
    );
  }

  /** Path part for operation `descriptor111()` */
  static readonly Descriptor111Path = '/profile/bookTransactionHistories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor111$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Any$Response(params?: Descriptor111$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor111$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor111$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Any(params?: Descriptor111$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor111$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor111$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Json$Response(params?: Descriptor111$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor111$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor111$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Json(params?: Descriptor111$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor111$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor112()` */
  static readonly Descriptor112Path = '/profile/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor112$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Any$Response(params?: Descriptor112$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor112$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor112$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Any(params?: Descriptor112$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor112$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor112$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Json$Response(params?: Descriptor112$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor112$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor112$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Json(params?: Descriptor112$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor112$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor113()` */
  static readonly Descriptor113Path = '/profile/feedbacks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor113$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Any$Response(params?: Descriptor113$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor113$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor113$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Any(params?: Descriptor113$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor113$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor113$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Json$Response(params?: Descriptor113$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor113$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor113$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Json(params?: Descriptor113$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor113$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor114()` */
  static readonly Descriptor114Path = '/profile/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor114$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Any$Response(params?: Descriptor114$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor114$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor114$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Any(params?: Descriptor114$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor114$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor114$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Json$Response(params?: Descriptor114$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor114$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor114$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Json(params?: Descriptor114$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor114$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor115()` */
  static readonly Descriptor115Path = '/profile/tokens';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor115$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Any$Response(params?: Descriptor115$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor115$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor115$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Any(params?: Descriptor115$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor115$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor115$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Json$Response(params?: Descriptor115$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor115$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor115$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Json(params?: Descriptor115$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor115$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor116()` */
  static readonly Descriptor116Path = '/profile/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor116$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Any$Response(params?: Descriptor116$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor116$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor116$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Any(params?: Descriptor116$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor116$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor116$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Json$Response(params?: Descriptor116$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor116$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor116$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Json(params?: Descriptor116$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor116$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

}
