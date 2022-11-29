import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config';
import { ApiService } from '../services/api.service';
import { Register } from '../models/user/register';
import { Authentication } from '../models/user/authentication';
const AUTH_API = Config.BASE_URL2;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private baseSvc:ApiService) { }
  login(user: Authentication): Observable<any> {
    return this.baseSvc.post(AUTH_API + 'Accounts/authenticate',JSON.stringify(user));
  }
  // register(firstName: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'accounts/register',
  //     {
  //       "title": "N/A",
  //       "firstName": firstName,
  //       "lastName": "N/A",
  //       "email": email,
  //       "password": password,
  //       "confirmPassword": "N/A",
  //       "acceptTerms": true
  //     }
  //   , httpOptions);
  // }
  register(model: Register): Observable<any> {
    return this.baseSvc.post(AUTH_API + 'Accounts/register',
    JSON.stringify(model));
  }
  
}