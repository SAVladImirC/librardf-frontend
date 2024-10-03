import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: any;
  @Input() height: number = 35;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goToDetails(isbn: string) {
    this.router.navigate(['books', isbn])
  }

  goToAuthor(id: number) {
    if (id)
      this.router.navigate(['authors', id]);
  }

  getFullAuthorName(author: any) {
    if (author) {
      return `${author.name ?? ""} ${author.surname ?? ""}`;
    } else return 'Unknown';
  }
}
