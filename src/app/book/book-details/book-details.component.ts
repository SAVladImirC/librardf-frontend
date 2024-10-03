import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  similarBooks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getBookByIsbn(params['isbn']).subscribe(result => {
        this.book = result;
        this.bookService.getBooksByGenre(this.book.genres, this.book.isbn).subscribe((result:any) =>{
          this.similarBooks = result.filter((b:any) => b.isbn != this.book.isbn);
        });
      })
    })
  }

  getFullAuthorName(author: any){
    if(author){
      return `${author.name ?? ""} ${author.surname ?? ""}`;
    }else return 'Unknown';
  }

}
