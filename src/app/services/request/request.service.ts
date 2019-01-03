import { Injectable } from '@angular/core';
import { Request } from '../../components/requests/request';
import { REQUESTS_MOCK } from '../../components/requests/requests-mock';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl = 'http://127.0.0.1:3000/request';

  constructor(private http: HttpClient) { }

  getRequests(date: String): Observable<Request[]> {
    return this.http
      .get<Request[]>(this.apiUrl + '?d=' + date)
      .pipe(
        tap(_ => this.log(`Doing getRequests...`)),
        catchError(this.handleError<any>('getRequests'))
      );
  }

  getRequest(id: any): Observable<Request> {
    return this.http.get<Request>(this.apiUrl + '/' + id).pipe(
      tap(_ => this.log(`Doing getRequest/${id}...`)),
      catchError(this.handleError<any>('getRequest'))
    );
  }

  sendRequest(request: Request): Observable<Request> {
    // return of(request);
    return this.http.post(this.apiUrl, request, httpOptions).pipe(
      tap(_ => this.log(`Doing sendRequest...`)),
      catchError(this.handleError<any>('sendRequest'))
    );
  }

  acceptRequest(request: Request): Observable<Request> {
    const _url = `${this.apiUrl}/${request._id}/accept`;
    return this.http.put(_url, {}, httpOptions).pipe(
      tap(_ => this.log(`Doing acceptRequest ${request._id}`)),
      catchError(this.handleError<any>('acceptRequest'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
