import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: any[] = [];
  selectedGenres: any[] = [];
  filter: string = "";

  constructor(private authorService: AuthorService, private router: Router, private spinner: NgxSpinnerService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((result: any) => {
      this.authors = result;
    })
  }

  getAllAuthorsFiltered() {
    this.spinner.show();
    this.authorService.getAllAuthorsFiltered(this.filter).subscribe((result: any) => {
      this.authors = result;
      this.spinner.hide();
    })
  }

  getAuthorsByGenre() {
    this.spinner.show();
    this.authorService.getAllAuthorsByGenre(this.selectedGenres).subscribe((result: any) => {
      this.authors = result;
      this.spinner.hide();
    })
  }

  filterChanged() {
    if (this.filter) {
      this.selectedGenres = [];
      this.getAllAuthorsFiltered();
    } else {
      this.getAllAuthors();
    }
  }

  addAuthor(): void {
    this.router.navigate(['./authors/create'])
  }

  authorGenreChanged() {
    if (this.selectedGenres.length) {
      this.filter = "";
      this.getAuthorsByGenre();
    }
    else
      this.getAllAuthors();
  }
}
