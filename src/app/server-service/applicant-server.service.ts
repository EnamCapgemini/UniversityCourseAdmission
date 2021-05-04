import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from 'src/model/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServerService {

  baseUrl: string = "http://localhost:9090/applicants"

  constructor(private http: HttpClient) { }
  getApplicants(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getApplicant(applicantId: number):Observable<any> {
    return this.http.get(`${this.baseUrl}/${applicantId}`)
  }
  updateApplicant(applicant: Applicant):Observable<any> {
    return this.http.put(this.baseUrl, applicant, { responseType: 'text' });
  }
  deleteApplicant(applicantId: number): Observable<any> {
    //include responseType in options because response by default is JSON
    return this.http.delete(`${this.baseUrl}/${applicantId}`, { responseType: 'text' })  // this.baseUrl+"/"+applicantId
  }
  addApplicant(newApp: Applicant) :Observable<any>{
    return this.http.post(this.baseUrl, newApp, { responseType: 'text' });
  }
}
