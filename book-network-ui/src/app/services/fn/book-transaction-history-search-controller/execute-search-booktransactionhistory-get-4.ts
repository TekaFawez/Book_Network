/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ExecuteSearchBooktransactionhistoryGet4$Params {
  bookId?: number;
  userId?: number;
}

export function executeSearchBooktransactionhistoryGet4(http: HttpClient, rootUrl: string, params?: ExecuteSearchBooktransactionhistoryGet4$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, executeSearchBooktransactionhistoryGet4.PATH, 'get');
  if (params) {
    rb.query('bookId', params.bookId, {});
    rb.query('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

executeSearchBooktransactionhistoryGet4.PATH = '/bookTransactionHistories/search/isAlreadyBorrowedByUser';
