import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;
  authorBooks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private authorSerice: AuthorService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.author = this.authorSerice.getAuthorById(params['id'])
      this.spinner.hide();
      this.authorBooks = this.bookService.getBooksByAuthor(this.author.id);
    })
  }

  getFullAuthorName() {
    if (this.author) {
      return `${this.author.name ?? ""} ${this.author.surname ?? ""}`;
    } else return 'Unknown';
  }
}
