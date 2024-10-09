import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'app-genre-selection',
  templateUrl: './genre-selection.component.html',
  styleUrls: ['./genre-selection.component.css']
})
export class GenreSelectionComponent implements OnInit {
  @Input() model: any;
  @Input() multiple: boolean = false;

  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  genres: any[] = [];
  genresFiltered: any[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((result: any) => {
      this.genres = this.genresFiltered = result;
    })
  }

  filterGenres(filter: string){
    filter = filter.toLowerCase();
    this.genresFiltered = this.genres.filter(g => g.name.toLowerCase().includes(filter)).sort();
  }

  selected(event: any) {
    this.modelChange.emit(event)
  }

}
