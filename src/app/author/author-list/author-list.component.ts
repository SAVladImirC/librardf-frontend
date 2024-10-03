import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: any[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((result: any) => {
      this.authors = result;
    })
  }

  getAllAuthorsFiltered(filter: string) {
    this.authorService.getAllAuthorsFiltered(filter).subscribe((result: any) => {
      this.authors = result;
    })
  }

  filterChanged(filter: any) {
    if (filter.target.value)
      this.getAllAuthorsFiltered(filter.target.value)
    else
      this.getAllAuthors();
  }
}
