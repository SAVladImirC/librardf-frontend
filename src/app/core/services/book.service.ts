import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { InsertRequest } from '../requests/book/insert-request';
import { UpdateRequest } from '../requests/book/update-request';
import { GenreService } from './genre.service';
import { concatMap, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private genreService: GenreService) { }

  getAllBooks() {
    return this.http.get(environment.books_all);
  }

  getAllBooksFiltered(filter: string) {
    return this.http.get(environment.books_filter + "/" + filter);
  }

  getBookByIsbn(isbn: string) {
    return this.http.get(environment.books_by_isbn + "/" + isbn);
  }

  getBooksByGenre(genres: number[]) {
    return this.http.get(environment.books_by_genres + "/" + genres);
  }

  getBooksByAuthor(authorId: number) {
    return this.http.get(environment.books_by_author + "/" + authorId);
  }

  insert(request: InsertRequest) {
    return this.http.post(environment.books_insert, request);
  }

  update(request: UpdateRequest) {
    return this.http.post(environment.books_update, request);
  }
}