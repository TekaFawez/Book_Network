import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { KeycloakService } from '../../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  constructor( private keycloakService:KeycloakService){}
  ngOnInit(): void {
    
    if (typeof document !== 'undefined') {
      const linkColor=document.querySelectorAll('.nav-link');  
      linkColor.forEach(link=>{
        if(window.location.href.endsWith(link.getAttribute('href')||'')){
          link.classList.add('active');
        }
        link.addEventListener('click',()=>{
          linkColor.forEach(l=>l.classList.remove('active'));
          link.classList.add('active')
        })
      })    
      // Manipulating the DOM here
   }
    
    
  }
// logout() {
// localStorage.removeItem('token');
// window.location.reload();
// }
async logout() {
 this.keycloakService.logout()
}

}
