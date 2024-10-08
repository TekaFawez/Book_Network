import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpTokenInterceptor } from './services/interceptor/http-token.interceptor';
import { ApiModule } from './services/api.module';
import { KeycloakService } from './services/keycloak/keycloak.service';
export function kcFactory(kcService: KeycloakService) {
  return () => kcService.init();
}
 // Provider for Keycloak Initialization
 const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  deps: [KeycloakService],
  useFactory: kcFactory,
  multi: true
 }
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(withFetch()),
    KeycloakInitializerProvider, // Initializes Keycloak
    provideHttpClient(withInterceptors([HttpTokenInterceptor])),
    // importProvidersFrom(
    //   ApiModule.forRoot({rootUrl: 'http://193.70.33.77:8088/api/v1'})
    // ),

  ],

};
