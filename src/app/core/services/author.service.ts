import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InsertRequest } from '../requests/author/insert-request';
import { environment } from 'src/environments/environments';
import { UpdateRequest } from '../requests/author/update-request';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors() {
    return this.http.get(environment.authors_all);
  }

  getAllAuthorsFiltered(filter: string) {
    return this.http.get(environment.authors_filter + "/" + filter);
  }

  getAllAuthorsByGenre(genres: number[]) {
    return this.http.get(environment.authors_by_genres + "/" + genres);
  }

  getAuthorById(id: number) {
    return this.http.get(environment.authors_by_id + "/" + id);
  }

  insert(request: InsertRequest) {
    return this.http.post(environment.authors_insert, request);
  }

  update(request: UpdateRequest) {
    return this.http.post(environment.authors_update, request);
  }
}