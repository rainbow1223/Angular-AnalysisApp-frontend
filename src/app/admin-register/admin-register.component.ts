import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../models/user/register';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {
  form: any = {
    firstName: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService
              ,private router: Router
    ) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const { firstName, email, password } = this.form;
    let model = new Register();
    model.firstName = firstName;
    model.email = email;
    model.password = password;
    model.role = 0; // For Admin
    this.authService.register(model).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  
signin(){
  this.router.navigate(['admin-login']);
}
}
