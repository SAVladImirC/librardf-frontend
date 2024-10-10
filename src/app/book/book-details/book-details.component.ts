import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  similarBooks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getBookByIsbn(params['isbn']).subscribe(result => {
        this.book = result;
        let genreIds = this.book.genres.map((g: any) => g.id);
        this.bookService.getBooksByGenre(genreIds).subscribe((result: any) => {
          this.similarBooks = result.filter((b: any) => b.isbn != this.book.isbn);
          this.spinner.hide();
        });
      })
    })
  }

  getFullAuthorName(author: any) {
    if (author) {
      return `${author.name ?? ""} ${author.surname ?? ""}`;
    } else return 'Unknown';
  }

  goToAuthor(): void {
    this.router.navigate(['authors/details', this.book.author.id]);
  }

  getGenres() {
    if (this.book?.genres)
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
