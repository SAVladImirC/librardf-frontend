import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const routes: Routes = [
  { path: "", component: AuthorListComponent },
  { path: "details/:id", component: AuthorDetailsComponent },
  { path: "create", component: AuthorEditComponent},
  { path: "edit/:id", component: AuthorEditComponent},
  { path: "", redirectTo: "authors", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
