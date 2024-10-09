import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-author-selection',
  templateUrl: './author-selection.component.html',
  styleUrls: ['./author-selection.component.css']
})
export class AuthorSelectionComponent {
  @Input() model: any;
  @Input() multiple: boolean = false;

  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  authors: any[] = [];
  authorsFiltered: any[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((result: any) => {
      this.authors = this.authorsFiltered = result;
    })
  }

  filterAuthors(filter: string){
    filter = filter.toLowerCase();
    this.authorsFiltered = this.authors.filter(g => g.name.toLowerCase().includes(filter)).sort();
  }

  selected(event: any) {
    this.modelChange.emit(event)
  }
}