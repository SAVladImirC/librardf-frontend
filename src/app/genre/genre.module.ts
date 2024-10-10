import { NgModule } from '@angular/core';

import { GenreRoutingModule } from './genre-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreEditComponent } from './genre-edit/genre-edit.component';


@NgModule({
  declarations: [
    GenreListComponent,
    GenreEditComponent
  ],
  imports: [
    GenreRoutingModule,
    SharedModule
  ]
})
export class GenreModule { }
