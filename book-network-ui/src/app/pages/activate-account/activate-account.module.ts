import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeInputComponent, CodeInputModule } from 'angular-code-input';
import { ActivateAccountComponent } from './activate-account.component';



@NgModule({
  declarations: [ActivateAccountComponent],
  imports: [
    CommonModule,
    CodeInputModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ActivateAccountModule { }
