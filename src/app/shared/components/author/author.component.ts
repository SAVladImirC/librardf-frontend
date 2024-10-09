import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() author: any;
  @Input() height: number = 35;

  constructor(private router: Router) { }

  getGenres(genres: string[]) {
    return genres.map(g => g.replace(/([A-Z])/g, ' $1').trim());
  }

  goToDetails() {
    this.router.navigate(['authors/details', this.author.id]);
  }
}
