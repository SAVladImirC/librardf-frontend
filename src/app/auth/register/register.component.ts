import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/core/requests/auth/register-request';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }

  registerGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormControl(''),
  });

  register(): void {
    var request: RegisterRequest = new RegisterRequest();
    request.name = this.registerGroup.get('name')?.value;
    request.surname = this.registerGroup.get('surname')?.value;
    request.email = this.registerGroup.get('email')?.value;
    request.password = this.registerGroup.get('password')?.value;
    request.address = this.registerGroup.get('address')?.value;

    if(request.password == this.registerGroup.get('password')?.value){
      this.authService.register(request).subscribe(result =>{
        if(result)
          this.router.navigate(['auth/login']);
      })
    }
  }
}
