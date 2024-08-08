import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
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

  removeToken(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
    } else {
      console.warn('LocalStorage is not available');
    }
  }
}
