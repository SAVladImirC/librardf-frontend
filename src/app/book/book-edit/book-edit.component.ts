import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InsertRequest } from 'src/app/core/requests/book/insert-request';
import { UpdateRequest } from 'src/app/core/requests/book/update-request';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: any;
  selectedGenres: number[] = [];
  selectedAuthor: number = 0;

  message: string = "";
  lock: boolean = false;

  bookGroup: FormGroup = new FormGroup({
    isbn: new FormControl(''),
    title: new FormControl(''),
    authorId: new FormControl(0),
    country: new FormControl(''),
    language: new FormControl(''),
    publisher: new FormControl(''),
    pages: new FormControl(0),
    year: new FormControl(0),
    shortDescription: new FormControl(''),
    fullDescription: new FormControl(''),
    imageLink: new FormControl(''),
  });

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['isbn'])
        this.bookService.getBookByIsbn(params['isbn']).subscribe((result: any) => {
          this.book = result;
          this.bookGroup.get('isbn')?.setValue(result?.isbn)
          this.bookGroup.get('title')?.setValue(result?.title)
          this.selectedAuthor = result.author.id;
          this.selectedGenres = result.genres.map((g: any) => g.id);
          this.bookGroup.get('authorId')?.setValue(result?.author.name)
          this.bookGroup.get('country')?.setValue(result?.country)
          this.bookGroup.get('language')?.setValue(result?.language)
          this.bookGroup.get('publisher')?.setValue(result?.publisher)
          this.bookGroup.get('pages')?.setValue(result?.pages)
          this.bookGroup.get('year')?.setValue(result?.year)
          this.bookGroup.get('shortDescription')?.setValue(result?.shortDescription)
          this.bookGroup.get('fullDescription')?.setValue(result?.fullDescription)
          this.bookGroup.get('imageLink')?.setValue(result?.imageLink)
        })
    })
  }

  getIcon() {
    return this.book?.isbn ? 'edit' : 'add'
  }

  save() {
    if (this.book?.isbn) {
      let request: UpdateRequest = new UpdateRequest();

      request.isbn = this.bookGroup.get('isbn')?.value;
      request.title = this.bookGroup.get('title')?.value;
      request.publisher = this.bookGroup.get('publisher')?.value;
      request.shortDescription = this.bookGroup.get('shortDescription')?.value;
      request.fullDescription = this.bookGroup.get('fullDescription')?.value;
      request.language = this.bookGroup.get('language')?.value;
      request.imageLink = this.bookGroup.get('imageLink')?.value;
      request.year = this.bookGroup.get('year')?.value;
      request.pages = this.bookGroup.get('pages')?.value;
      request.country = this.bookGroup.get('country')?.value;
      request.authorId = this.selectedAuthor;
      request.genres = this.selectedGenres;

      this.bookService.update(request).subscribe({
        next: (result: any) => {
          if (result) {
            this.message = "Successfully saved";
            setTimeout(() => {
              this.message = "";
            }, 3000);
          } else {
            this.message = "Problem occured";
            setTimeout(() => {
              this.message = "";
            }, 3000);
          }
        },
        error: (e) => {
          this.message = "Problem occured";
          setTimeout(() => {
            this.message = "";
          }, 3000);
        }
      });
    } else {
      let request: InsertRequest = new InsertRequest();

      request.title = this.bookGroup.get('title')?.value;
      request.publisher = this.bookGroup.get('publisher')?.value;
      request.shortDescription = this.bookGroup.get('shortDescription')?.value;
      request.fullDescription = this.bookGroup.get('fullDescription')?.value;
      request.language = this.bookGroup.get('language')?.value;
      request.imageLink = this.bookGroup.get('imageLink')?.value;
      request.year = this.bookGroup.get('year')?.value;
      request.pages = this.bookGroup.get('pages')?.value;
      request.country = this.bookGroup.get('country')?.value;
      request.authorId = this.selectedAuthor;
      request.genres = this.selectedGenres;

      this.bookService.insert(request).subscribe({
        next: (result: any) => {
          if (result) {
            this.message = "Successfully saved";
            this.lock = true;
            setTimeout(() => {
              this.message = "";
            }, 3000);
          } else {
            this.message = "Problem occured";
            setTimeout(() => {
              this.message = "";
            }, 3000);
          }
        },
        error: (e) => {
          this.message = "Problem occured";
          setTimeout(() => {
            this.message = "";
          }, 3000);
        }
      });
    }
  }

}