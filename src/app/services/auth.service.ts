import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dev = false;
  URL_DEV = 'http://locahost:3000/api';
  URL_TEST = 'https://test-node-jb.herokuapp.com/api';
  API_URL: string

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
      this.API_URL = this.dev ? this.URL_DEV : this.URL_TEST;
  }

  login(email: string, password: string) {
    const body = {
      email,
      password
    }
    return this.httpClient.post(`${this.API_URL}/auth/login`, body)
    .pipe(
      map(
        (resp: any) => {
          localStorage.setItem('TOKEN_APPLI', resp.token);
          localStorage.setItem('USER_ID', resp.userId);
          console.log('Token Save');
          return resp;
        }
      )
    );
  }

  signup(nom : string, description : string, auteur: string, besoin: string) {

    const body = {
      nom,
      description,
      auteur,
      besoin
    }
    return this.httpClient.post(`${this.API_URL}/auth/signup`, body)
  }

  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    this.router.navigate(['/login']);
  }
}
