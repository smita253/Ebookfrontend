import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserSService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8095/api/addUser";

  
  public addUser(user:User):Observable<User>
  {
   return this.httpClient.post<User>(`${this.baseUrl}`,user);
  }
}