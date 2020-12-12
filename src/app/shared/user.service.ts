import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  // handling erros in service
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getUserById(id): Observable<User>{
    return this.http.get<User>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.url, user ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteUser(user: User): Observable<User>{
  return this.http.delete<User>(this.url + '/' + user.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>(this.url + '/' + user.id, user ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  login(email, password)
  {
    return this.http.get<User[]>('http://localhost:3000/users?email=' + email + '&&password=' + password);
  }
  rechercheruser(searchinput)
  {
    return this.http.get<User[]>('http://localhost:3000/users/?q=' + searchinput);
  }
  rechercheUser(namef): Observable<User[]>{
    return  this.http.get<User[]>(this.url + '?namef_like=' + namef ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  rechercheEmail(email): Observable<User[]>{
    return  this.http.get<User[]>(this.url + '?email_like=' + email ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  rechercheM(crit): Observable<User[]>{
    return  this.http.get<User[]>(this.url + '?q=' + crit ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
