import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GENRE } from 'src/app/core/models/genres';
import { InsertRequest } from 'src/app/core/requests/author/insert-request';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  authorGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    dob: new FormControl(''),
    dod: new FormControl(''),
    nationality: new FormControl(''),
    biography: new FormControl(''),
    genres: new FormControl([]),
    imageUrl: new FormControl(''),
  });

  constructor(private authorService: AuthorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'])
        this.authorService.getAuthorById(params['id']).subscribe((result: any) => {
          this.authorGroup.get('name')?.setValue(result?.name);
          this.authorGroup.get('surname')?.setValue(result?.surname)
          this.authorGroup.get('dob')?.setValue(result?.dob)
          this.authorGroup.get('dod')?.setValue(result?.dod)
          this.authorGroup.get('nationality')?.setValue(result?.nationality)
          this.authorGroup.get('biography')?.setValue(result?.biography)
          this.authorGroup.get('imageUrl')?.setValue(result?.imageUrl)
          this.authorGroup.get('genres')?.patchValue(result?.genres)
        })
    })
  }

  save() {
    var request: InsertRequest = new InsertRequest();

    request.name = this.authorGroup.get('name')?.value;
    request.surname = this.authorGroup.get('surname')?.value;
    request.dob = this.authorGroup.get('dob')?.value;
    request.dod = this.authorGroup.get('dod')?.value;
    request.nationality = this.authorGroup.get('nationality')?.value;
    request.biography = this.authorGroup.get('biography')?.value;
    request.imageUrl = this.authorGroup.get('imageUrl')?.value;
    request.genres = this.authorGroup.get('genres')?.value.map((sg: string) => sg.replace(" ", ""));

    this.authorService.insert(request).subscribe((result: any) => {
      console.log(result);
    })
  }

  getGenres(): string[] {
    return GENRE.sort();
  }

}
