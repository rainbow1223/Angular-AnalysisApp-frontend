import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../config';
import { Authentication } from '../models/user/authentication';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    const user = new Authentication(email,password);
    this.authService.login(user).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.jwtToken);
        this.tokenStorage.saveUser(data.body);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        Config.setUserInfo(data.body);
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    this.router.navigate(['dashboard']);
    //window.location.reload();
  }
}