import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: any;
  @Input() height: number = 35;
  @Input() small: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public authService: AuthService) { }

  goToDetails() {
    this.router.navigate(['books/details', this.book.isbn])
  }

  goToEdit() {
    this.router.navigate(['books/edit', this.book.isbn])
  }

  goToAuthor(id: number) {
    if (id)
      this.router.navigate(['authors/details', id]);
  }

  getFullAuthorName(author: any) {
    if (author) {
      return `${author.name ?? ""} ${author.surname ?? ""}`;
    } else return 'Unknown';
  }

  getGenres() {
    if (this.book.genres)
      return this.book.genres.map((g: any) => g.name);
  }

  getBookImageUrl() {
    if (this.book?.imageLink)
      if (this.book.imageLink.includes('images-local/'))
        return '../../../assets/' + this.book?.imageLink;
      else return this.book.imageLink;
    else return '';
  }
}
