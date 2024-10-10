import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/core/requests/auth/login-request';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private authService: AuthService, private router: Router) { }

  goToRegister(): void {
    this.router.navigate(['auth/register']);
  }

  login(): void {
    var request: LoginRequest = new LoginRequest();
    request.email = this.username.value;
    request.password = this.password.value;

    this.authService.login(request).subscribe((result: any) => {
      if (result && result.id > 0) {
        this.authService.isAuthenticated = true;
        this.authService.currentUser = result;
        this.router.navigate(['']);
      } else {
        this.authService.isAuthenticated = false;
      }
    })
  }
}
