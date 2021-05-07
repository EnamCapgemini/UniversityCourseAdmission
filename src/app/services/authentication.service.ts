import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl: String = 'http://localhost:8082/';

  constructor(private http: HttpClient) {
  }

  login(credentials) {
    let url = this.baseUrl + 'login';
    return this.http.post<any>(url, credentials).pipe(
      map(
        response => {
          if (response && response.token) {
            let tokenStr = 'Bearer ' + response.token;
            localStorage.setItem('token', tokenStr);
            return response;
          }
        },
        error => error

      )
    );
  }

  logout() {
    let token = localStorage.getItem('token');
    let url = this.baseUrl + 'remove';
    let headers = new HttpHeaders({'Authorization' : token});
    return this.http.get(url, {headers, responseType:'text'});
    //localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (!token)
      return false;

    return tokenNotExpired(null,token);
  }

  getUserDetails(): Observable<any> {
    let token = localStorage.getItem('token');
    let url = this.baseUrl + 'getUserDetails';
    let headers = new HttpHeaders({ 'Authorization' : token });
    return this.http.get(url, {headers});
  }

  getSensitive(): Observable<any> {
    let token = localStorage.getItem('token');
    let url = this.baseUrl + 'getSensitive';
    let headers = new HttpHeaders({ 'Authorization' : token});
    return this.http.get(url, {headers, responseType:'text'});
  }
}
