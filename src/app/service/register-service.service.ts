import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../Author';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private baseURL="http://localhost:8095/api/";
  constructor(private httpclient:HttpClient) { }
public loadheaders(){
  var httpOptions;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",'Access-Control-Allow-Origin': 'origin'
    // "Authorization": `Bearer ${localStorage.getItem('token')}`
    }), observe: 'response'
  }
};
  
public getRegister():Observable<Author[]>{

  return this.httpclient.get<Author[]>(`${this.baseURL}getauthordetails`)
}

public AddRegister(author:Author):Observable<Author>{
  var httpOptions;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" :"*"

    // "Authorization": `Bearer ${localStorage.getItem('token')}`

    })
  }
return this.httpclient.post <Author>(`${this.baseURL}addauthor`,author)
}

UpdateRegister(muthor:Author):Observable<object>{
  return this.httpclient.put(`${this.baseURL}updateauthor/${muthor.registrationNumber}`,muthor)
}

deleteRegister( regnumber:number):Observable<String>{
return this.httpclient.delete(`${this.baseURL}deleteauthor/${regnumber}`,  {responseType: 'text'});
}

getUserByRegistrationNumber(regno:number):Observable<Author>{
  return this.httpclient.get<Author>(`${this.baseURL}getbyid/${regno}`)
  }
}              