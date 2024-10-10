import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: "books", loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
  { path: "authors", loadChildren: () => import('./author/author.module').then(m => m.AuthorModule) },
  { path: "genres", loadChildren: () => import('./genre/genre.module').then(m => m.GenreModule) },
  { path: "**", redirectTo: "books" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
