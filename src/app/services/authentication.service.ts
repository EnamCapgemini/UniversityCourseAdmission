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
  Role: string;

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

  changePassword(credentials): Observable<any> {
    let token = localStorage.getItem('token');
    let url = this.baseUrl + 'changePassword';
    let headers = new HttpHeaders({ 'Authorization' : token});
    return this.http.put(url, credentials, {headers, responseType:'text'});
  }

  getRole(): Observable<any> {
    let token = localStorage.getItem('token');
    let url = this.baseUrl + 'getRole';
    let headers = new HttpHeaders({ 'Authorization' : token});
    return this.http.get(url, {headers, responseType: 'text'});
  }
}
