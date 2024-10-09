import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { UpdateRequest } from '../requests/genre/update-request';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getAllGenres(){
    return this.http.get(environment.genres_all);
  }

  getGenreById(id: number){
    return this.http.get(environment.genres_by_id + "/" + id);
  }

  insert(name: string){
    return this.http.post(environment.genres_insert + "/" + name, null);
  }
  
  update(request: UpdateRequest){
    return this.http.post(environment.genres_update, request);
  }
}