export class InsertRequest {
    title: string = "";
    publisher: string = "";
    shortDescription: string = "";
    fullDescription: string = "";
    language: string = "";
    imageLink: string = "";
    year: number = 0;
    pages: number = 0;
    country: string = "";
    authorId: number = 0;
    genres: number[] = [];
}