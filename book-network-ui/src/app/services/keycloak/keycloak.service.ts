import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak :Keycloak|undefined
  private _profile:UserProfile|undefined
  private _initialized = false;  // Flag to check initialization


  get keycloak() {
    if (!this._keycloak && typeof window !== 'undefined') {
      this._keycloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'book-social-network',
        clientId: 'bsn'
      });
    }
    return this._keycloak;
  }

  get profile() :UserProfile|undefined{
    return this._profile;
  }



  constructor() { }

 
  async init() {
    if (this._initialized) {
      // Prevent re-initialization
      return;
    }

    if (this.keycloak) {
      const authenticate = await this.keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false 
      });

      if (authenticate) {
        this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
        this._profile.token = this.keycloak.token;
      }
    }
    
    this._initialized = true;  // Set the flag to true after initialization
  }

  login(){
    return this.keycloak?.login();
  }
  logout(){
    return this.keycloak?.logout();
  }
}
