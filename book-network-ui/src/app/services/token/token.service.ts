import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  set token(token: string) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('token', token);
    } else {
      console.warn('LocalStorage is not available');
    }
  }

  get token(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('token');
    } else {
      console.warn('LocalStorage is not available'); 
      return null;
    }
  }
  
  isTokenNotValid():boolean {
    const token=this.token;
    if(!token){
      return false
    }
    //decode jwt
    const jwtHalper= new JwtHelperService()
    //check expired
    const isTokenExpired=jwtHalper.isTokenExpired(token)
    if(isTokenExpired){
      localStorage.clear();
      return false
    }
    return true
  }
  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }



  removeToken(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
    } else {
      console.warn('LocalStorage is not available');
    }
  }
}
