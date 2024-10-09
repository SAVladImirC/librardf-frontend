import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  { path: "", component: BookListComponent },
  { path: "details/:isbn", component: BookDetailsComponent },
  { path: "edit/:isbn", component: BookEditComponent },
  { path: "edit", component: BookEditComponent },
  { path: "", redirectTo: "books", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
