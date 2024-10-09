let base = "http://localhost:8080/api/"

export const environment = {

    //#region Book
    books_all: base + "book",
    books_filter: base + "book/filter",
    books_by_isbn: base + "book/by-isbn",
    books_by_genres: base + "book/by-genres",
    books_by_author: base + "book/by-author",
    books_insert: base + "book/insert",
    books_update: base + "book/update",
    //#endregion

    //#region Author
    authors_all: base + "author",
    authors_filter: base + "author/filter",
    authors_by_id: base + "author",
    authors_insert: base + "author/insert",
    authors_update: base + "author/update",
    //#endregion

    //#region Genre
    genres_all: base + "genre",
    genres_by_id: base + "genre",
    genres_insert: base + "genre/insert",
    genres_update: base + "genre/update",
    //#endregion

    //#region Auth
    login: base + "auth/login",
    register: base + "auth/register",
    //#endregion
}