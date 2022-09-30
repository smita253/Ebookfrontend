import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  constructor(private httpClient: HttpClient) {}

  getBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(
      'http://localhost:8095/api/getbooks'
    );
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(
      "http://localhost:8095/api/addBook",book
    ).pipe(catchError(this.handleError));
  }

  getAdminById(adminId: number): Observable<Book> {
    return this.httpClient.get<Book>(
      'http://localhost:6060/api/getAdmin/' + adminId
    );
  }
  updateAdmin(adminId: number, admin: Book): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:6060/api/admin/update/' + adminId,
      admin
    );
  }

  deleteAdmin(adminId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:6060/api/deleteAdminById/' + adminId
    );
  }

  handleError(error: HttpErrorResponse) {

    if (error.status === 0) {

     // A client-side or network error occurred. Handle it accordingly.

     console.error('An error occurred:', error.error);

   } else {

     // The backend returned an unsuccessful response code.

     // The response body may contain clues as to what went wrong.

     console.error(

       `Backend returned code ${error.status}, body was: `, error.error);

   }

   // Return an observable with a user-facing error message.

   return throwError(() => new Error('Something bad happened; please try again later.'));

 }
}
