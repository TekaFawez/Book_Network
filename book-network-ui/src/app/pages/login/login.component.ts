import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';
import { KeycloakService } from '../../services/keycloak/keycloak.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
  constructor ( 
    // private router:Router,
    // private authService:AuthenticationService,
    // private tokenService:TokenService
    private keycloakService : KeycloakService
  ){}
  async ngOnInit(): Promise<void> {
    await this.keycloakService.init()
    await this.keycloakService.login()
   
  }
  // authRequest : AuthenticationRequest={email:'',password:''};
  // errorMsg:Array<string>=[];
  
//   
// login() {
//   this.errorMsg = [];
//   this.authService.authenticate({
//     body: this.authRequest
//   }).subscribe({
//     next: (res) => {
//       this.tokenService.token = res.token as string;
//       console.log(res.token);
//       this.router.navigate(['books']);
//       console.log(this.authRequest);

//     },
//     error: (err) => {
//       console.log(this.authRequest);
//       console.log('Error response:', err);
      
//       // Improved error handling
//       if (err.error) {
//         if (err.error.validationErrors) {
//           this.errorMsg = err.error.validationErrors;
//         } else if (err.error.errorMsg) {
//           this.errorMsg.push(err.error.errorMsg);
//         } else if (typeof err.error === 'string') {
//           this.errorMsg.push(err.error); // If the error message is a string
//         } else {
//           this.errorMsg.push('An unknown error occurred. Please try again later.');
//         }
//       } else {
//         this.errorMsg.push('No response received from server. Please check your connection.');
//       }
//     }
//   });
// }

// register(){
//   this.router.navigate(['register'])
// }

}
