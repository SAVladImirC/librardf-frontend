import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent
  ],
  imports: [
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }
