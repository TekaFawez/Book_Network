/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { BookTransactionHistoryEntityControllerService } from './services/book-transaction-history-entity-controller.service';
import { BookTransactionHistorySearchControllerService } from './services/book-transaction-history-search-controller.service';
import { BookTransactionHistoryPropertyReferenceControllerService } from './services/book-transaction-history-property-reference-controller.service';
import { BookEntityControllerService } from './services/book-entity-controller.service';
import { BookService } from './services/book.service';
import { BookSearchControllerService } from './services/book-search-controller.service';
import { BookPropertyReferenceControllerService } from './services/book-property-reference-controller.service';
import { FeedbackEntityControllerService } from './services/feedback-entity-controller.service';
import { FeedbackSearchControllerService } from './services/feedback-search-controller.service';
import { FeedbackPropertyReferenceControllerService } from './services/feedback-property-reference-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { RoleEntityControllerService } from './services/role-entity-controller.service';
import { RoleSearchControllerService } from './services/role-search-controller.service';
import { TokenEntityControllerService } from './services/token-entity-controller.service';
import { TokenSearchControllerService } from './services/token-search-controller.service';
import { TokenPropertyReferenceControllerService } from './services/token-property-reference-controller.service';
import { UserEntityControllerService } from './services/user-entity-controller.service';
import { UserSearchControllerService } from './services/user-search-controller.service';
import { UserPropertyReferenceControllerService } from './services/user-property-reference-controller.service';
import { FeedbackService } from './services/feedback.service';
import { AuthenticationService } from './services/authentication.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BookTransactionHistoryEntityControllerService,
    BookTransactionHistorySearchControllerService,
    BookTransactionHistoryPropertyReferenceControllerService,
    BookEntityControllerService,
    BookService,
    BookSearchControllerService,
    BookPropertyReferenceControllerService,
    FeedbackEntityControllerService,
    FeedbackSearchControllerService,
    FeedbackPropertyReferenceControllerService,
    ProfileControllerService,
    RoleEntityControllerService,
    RoleSearchControllerService,
    TokenEntityControllerService,
    TokenSearchControllerService,
    TokenPropertyReferenceControllerService,
    UserEntityControllerService,
    UserSearchControllerService,
    UserPropertyReferenceControllerService,
    FeedbackService,
    AuthenticationService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
