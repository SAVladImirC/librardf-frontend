import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selectedGenres: any[] = [];
  filter: string = "";

  constructor(private bookService: BookService, private authorService: AuthorService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  goToEdit(){
    this.router.navigate(['books/edit']);
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

  getBooksByGenre() {
    this.spinner.show();
    this.bookService.getBooksByGenre(this.selectedGenres).subscribe((result: any) => {
      this.books = result;
      this.spinner.hide();
    })
  }

  filterChanged() {
    if (this.filter) {
      this.selectedGenres = [];
      this.getFilteredBooks(this.filter);
    } else {
      this.getAllBooks();
    }
  }

  bookSelectionChanged() {
    if (this.selectedGenres.length){
      this.filter = "";
      this.getBooksByGenre();
    }
    else
      this.getAllBooks();
  }
}
