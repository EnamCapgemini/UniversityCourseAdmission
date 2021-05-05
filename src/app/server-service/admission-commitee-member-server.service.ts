import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionCommiteeMember } from 'src/model/admissionCommiteeMember';

@Injectable({
  providedIn: 'root'
})
export class AdmissionCommiteeMemberServerService {

  baseUrl: string = "http://localhost:8082/admissionCommiteeMembers"

  constructor(private http: HttpClient) { }
  getAdmissionComiteeMembers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getAdmissionCommiteeMember(admissionCommiteeMemberId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${admissionCommiteeMemberId}`)
  }
  updateApplicant(admissionCommiteeMember: AdmissionCommiteeMember): Observable<any> {
    return this.http.put(this.baseUrl, admissionCommiteeMember, { responseType: 'text' });
  }
  deleteApplicant(admissionCommiteeMemberId: number): Observable<any> {
    //include responseType in options because response by default is JSON
    return this.http.delete(`${this.baseUrl}/${admissionCommiteeMemberId}`, { responseType: 'text' })  // this.baseUrl+"/"+admissionCommiteeMemberId
  }
  addApplicant(newApp: AdmissionCommiteeMember): Observable<any> {
    return this.http.post(this.baseUrl, newApp, { responseType: 'text' });
  }
}
