import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  // handling erros in service
  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getPostById(id): Observable<Post>{
    return this.http.get<Post>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  postPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.url, post ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deletePost(post: Post): Observable<Post>{
  return this.http.delete<Post>(this.url + '/' + post.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putPost(post: Post): Observable<Post>{
    return this.http.put<Post>(this.url + '/' + post.id, post ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  rechercheM(crit): Observable<Post[]>{
    return  this.http.get<Post[]>(this.url + '?q=' + crit ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

}
