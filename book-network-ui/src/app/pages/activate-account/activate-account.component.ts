import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { CodeInputComponent } from 'angular-code-input';


@Component({
  selector: 'app-activate-account',
  standalone: false,
 
  
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})

export class ActivateAccountComponent {


  message:string='';
  isOkay=true;
  submitted=false;
  constructor(private router:Router,
    private authService:AuthenticationService
  ){

  }
  onCodeCompleted(token: string) {
this.confirmAccount(token)
    }
  confirmAccount(token: string) {
    this.authService.confirm(
      {token}
    ).subscribe({
      next:()=>{
        this.message="Your account has been successfuly activated \n Now you can go to login";
        this.submitted=true;
        this.isOkay=true;
      },
      error:()=>{
        this.message="Token has been expired or invalid";
        this.submitted=true;
        this.isOkay=false;
      }
    })
  }
    redirectToLogin() {
     this.router.navigate(['login'])
      }
}
