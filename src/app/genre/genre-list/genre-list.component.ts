import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GenreService } from 'src/app/core/services/genre.service';
import { GenreEditComponent } from '../genre-edit/genre-edit.component';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private genreService: GenreService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genreService.getAllGenres().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);
    })
  }

  openEdit(row: any) {
    let dialogRef = this.dialog.open(GenreEditComponent, {
      data: row, enterAnimationDuration: '200ms',
      disableClose: true,
      closeOnNavigation: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadGenres();
    })
  }
}
