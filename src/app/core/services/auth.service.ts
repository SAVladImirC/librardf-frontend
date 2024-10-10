import { Injectable } from '@angular/core';
import { LoginRequest } from '../requests/auth/login-request';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../requests/auth/register-request';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  currentUser: any;

  constructor(private http: HttpClient, private router: Router) { }
  
  login(request: LoginRequest){
    return this.http.post(environment.login, request);
  }

  register(request: RegisterRequest){
    return this.http.post(environment.register, request);
  }

  logout(): void{
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigate(['auth/login']);
  }

  showLibrarianOptions(): boolean{
    return this.isAuthenticated && this.currentUser.role == "LIBRARIAN";
  }
}
