import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;
  authorBooks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private authorService: AuthorService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.authorService.getAuthorById(params['id']).subscribe(result => {
        this.author = result;
        this.bookService.getBooksByAuthor(this.author.id).subscribe((result: any) => {
          this.authorBooks = result;
        })
      })
    })
  }

  editAuthor(): void {
    this.router.navigate(['authors/edit', this.author.id]);
  }

  getFullAuthorName() {
    if (this.author) {
      return `${this.author.name ?? ""} ${this.author.surname ?? ""}`;
    } else return 'Unknown';
  }

  getGenres() {
    if(this.author?.genres)
    return this.author.genres.map((g: any) => g.name).join(", ")
  }

}