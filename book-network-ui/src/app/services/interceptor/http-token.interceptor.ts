import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { KeycloakService } from '../keycloak/keycloak.service';

// @Injectable()
// export class HttpTokenInterceptor implements HttpInterceptor {

//   constructor(
//     private tokenService: TokenService
//   ) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = this.tokenService.token;
//     if (token) {
//       const authReq = request.clone({
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token
//         })
//       });
//       return next.handle(authReq);
//     }
//     return next.handle(request);
//   }
// }

export const HttpTokenInterceptor: HttpInterceptorFn = (req, next) => {
 // const tokenService = inject(TokenService);

  const keycloakService = inject(KeycloakService);


  // const authToken = tokenService.token
  const authToken = keycloakService.keycloak?.token


  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  // headers: new HttpHeaders({
  //             Authorization: `Bearer ${authToken}`
  //           })
  //         });
  return next(authReq);
};