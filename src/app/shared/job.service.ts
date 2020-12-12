import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Job} from '../models/Job';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  url = 'http://localhost:3000/jobs';
  constructor(private http: HttpClient) { }

  // handling erros in service
  getAllJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getJobById(id): Observable<Job>{
    return this.http.get<Job>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  postJob(job: Job): Observable<Job>{
    return this.http.post<Job>(this.url, job ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteJob(job: Job): Observable<Job>{
  return this.http.delete<Job>(this.url + '/' + job.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putJob(job: Job): Observable<Job>{
    return this.http.put<Job>(this.url + '/' + job.id, job ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  rechercheM(crit): Observable<Job[]>{
    return  this.http.get<Job[]>(this.url + '?q=' + crit ).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

}
