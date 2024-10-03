import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService, private authorService: AuthorService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.spinner.show();
    this.bookService.getAllBooks().subscribe((result: any) => {
      this.books = result;
      this.spinner.hide();
    })
  }

  getFilteredBooks(filter: string) {
    this.spinner.show();
    this.bookService.getAllBooksFiltered(filter).subscribe((result: any) => {
      this.books = result;
      this.spinner.hide();
    })
  }

  filterChanged(filter: any) {
    if (filter.target.value) {
      this.getFilteredBooks(filter.target.value);
    } else {
      this.getAllBooks();
    }
  }
}
