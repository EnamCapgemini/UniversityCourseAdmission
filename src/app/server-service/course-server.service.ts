import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServerService {

  baseUrl:string="http://localhost:4042/courses"

  constructor(private http:HttpClient) { }
    getCourses(): Observable<any> {
      return this.http.get(this.baseUrl);
    }
    deleteCourses(cid: number): Observable<any> {
      //include responseType in options because response by default is JSON
      return this.http.delete(`${this.baseUrl}/${cid}`, { responseType: 'text' })  // this.baseUrl+"/"+eid
    }
  
}
