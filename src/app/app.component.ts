import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LibraRDF';
  showToolbar: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  goHome(): void {
    this.router.navigate(['']);
  }

  goToBooks(): void {
    this.router.navigate(['books']);
  }

  goToAuthors(): void {
    this.router.navigate(['authors']);
  }

  goToGenres(): void {
    this.router.navigate(['genres']);
  }

  goToLogin(): void {
    this.router.navigate(['auth/login']);
  }

  goToRegister(): void {
    this.router.navigate(['auth/register']);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showToolbar = !event.url.includes('login') && !event.url.includes('register');
      });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  getCurrentUser(): string {
    return this.authService.currentUser.email;
  }

  logout(): void {
    this.authService.logout();
  }
}
