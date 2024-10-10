import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() author: any;
  @Input() height: number = 35;

  constructor(private router: Router, public authService: AuthService) { }

  getGenres() {
    if (this.author?.genres)
      return this.author.genres.map((g: any) => g.name).join(", ")
  }

  goToDetails() {
    this.router.navigate(['authors/details', this.author.id]);
  }

  goToEdit(){
    this.router.navigate(['authors/edit', this.author.id]);
  }
}
