import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityStaffs } from 'src/model/universityStaffs';

@Injectable({
  providedIn: 'root'
})
export class UniversityStaffServerService {

  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:8082/UniversityStaffs'
  getStaffs(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getStaff(staffId: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${staffId}`);
  }

  updateStaff(staff: UniversityStaffs): Observable<any> {
    return this.http.put(this.baseUrl,staff,{responseType:'text'});
  }

  deleteStaff(staffId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${staffId}`,{responseType:'text'});
  }

  addStaff(newStaff: UniversityStaffs): Observable<any> {
    return this.http.post(this.baseUrl,newStaff,{responseType:'text'});
  }
}
