import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.books = this.bookService.getAllBooks();
    console.log(
      this.books.map(b => {
        return { ...b, author: this.authorService.authors.find(a => b.author == `${a.name} ${a.surname}`) }
      }
      )
    )
  }
}
