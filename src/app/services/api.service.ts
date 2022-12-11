import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from './app-config.service';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string;
  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.baseURL = appConfig.base_url;
  }

  private getApiEndPointUrl(routePath: string): string {
    return `${this.baseURL}/${routePath}`;
  }

  get(url: string): Observable<any> {
    return this.http.get(url, { observe: 'response' });
  }

  getWithParam(url: string, params: HttpParams): Observable<any> {
    return this.http
      .get(url, { params: params, observe: 'response' })
      .pipe(
        // For example, network interruptions are common in mobile scenarios
        // Trying again can produce a successful result
        // retry(2),
        catchError(this.handleError)
      );
  }

  save(url: string, data: any, hasAction?: boolean): Observable<any> {
    if (!hasAction) {
      url = url + 'SaveChanges';
    }

    return this.http
      .post<any>(url, data, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  postRequest(url: string,data: any): Observable<any> {
    return this.http
      .post<any>(this.baseURL + url, data, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }
  remove(
    url: string,
    entity: any,
    hasAction: boolean = false,
    key?: string
  ): Observable<any> {
    if (!hasAction) {
      url = url + '/Delete';
    }
    const pk: number = typeof key === 'undefined' ? entity.id : entity[key];

    return this.http
      .post<boolean>(url, pk, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  removeByID(url: string, id: number): Observable<any> {
    return this.http
      .delete(`${url}/${id}`, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  postWithParam(url: string, body: any, params?: HttpParams): Observable<any> {
    // return this.http.post<Person>(this.baseURL + 'people', body,{'headers':headers, 'params': params})
    // return this.http.post<Person>(this.baseURL + 'people', body,{'headers':headers, responsetype: 'text'})
    // return this.http.post(this.baseURL + 'people', body,{'headers':headers, observe: 'response',reportProgress: true})
    return this.http
      .post(url, {}, { params, observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  putWithParam(url: string, body: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'content-type',
      'application/json; charset=utf-8'
    );
    return this.http
      .put<any>(url, body, {headers: headers, observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  postWithParameter(url: string, body: any, params?: any): Observable<any> {
    return this.http
      .post(url, body, {
        params: params,
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  post(url: string, data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'content-type',
      'application/json; charset=utf-8'
    );
    return this.http
      .post<any>(url, data, {
        headers: headers,
        observe: 'response',
      })
      //.pipe(catchError(this.handleError));
  }

  executeQuery(
    url: string,
    data: any,
    isPost: boolean = false
  ): Observable<any> {
    const headers = new HttpHeaders().set(
      'content-type',
      'application/json; charset=utf-8'
    );
    // headers.set('Content-Length', data.toString().length.toString());

    if (!isPost) {
      return this.http
        .get(url, { headers: headers, params: data, observe: 'response' })
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .post<any>(this.getApiEndPointUrl(url), data, {
          headers: headers,
          observe: 'response',
        })
        .pipe(catchError(this.handleError));
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = error.error.message;
      const errMessage = error.error.message;
      console.error('An error occurred:', errMessage);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => error || 'Server error');
  }
}