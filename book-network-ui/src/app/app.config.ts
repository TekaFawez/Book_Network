import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpTokenInterceptor } from './services/interceptor/http-token.interceptor';
import { ApiModule } from './services/api.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([HttpTokenInterceptor])),
    importProvidersFrom(
      ApiModule.forRoot({rootUrl: 'http://193.70.33.77:8088/api/v1'})
    ),
  ],

};
