import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  constructor(){}
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
logout() {
localStorage.removeItem('token');
window.location.reload();
}

}
