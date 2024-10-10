import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateRequest } from 'src/app/core/requests/genre/update-request';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent {
  genre: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private genreService: GenreService) {
    this.genre = { ...data }
  }

  save() {
    if (this.genre.id) {
      let request: UpdateRequest = new UpdateRequest(this.genre.id, this.genre.name);
      this.genreService.update(request).subscribe();
    } else {
      this.genreService.insert(this.genre.name).subscribe();
    }
  }
}