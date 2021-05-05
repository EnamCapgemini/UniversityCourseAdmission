import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServerService { 


  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8082/Courses"

    getCourses(): Observable<any> {
      return this.http.get(this.baseUrl);
    }
    getCourse(cid: number):Observable<any> {
      return this.http.get(`${this.baseUrl}/${cid}`)
    }
    updateCourse(cid: number):Observable<any> {
      return this.http.put(`${this.baseUrl}/${cid}`, { responseType: 'text' });
    }
    deleteCourses(cid: number): Observable<any> {
      //include responseType in options because response by default is JSON
      return this.http.delete(`${this.baseUrl}/${cid}`, { responseType: 'text' })  // this.baseUrl+"/"+eid
    }
    addCourses(sid: number) :Observable<any>{
      return this.http.post(`${this.baseUrl}/${sid}`, { responseType: 'text' });
    }
}
