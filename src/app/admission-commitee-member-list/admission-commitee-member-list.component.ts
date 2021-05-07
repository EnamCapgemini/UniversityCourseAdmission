import { Component, OnInit } from '@angular/core';
import { AdmissionCommiteeMember } from 'src/model/admissionCommiteeMember';
import { AdmissionCommiteeMemberServerService } from '../server-service/admission-commitee-member-server.service';

@Component({
  selector: 'app-admission-commitee-member-list',
  templateUrl: './admission-commitee-member-list.component.html',
  styleUrls: ['./admission-commitee-member-list.component.css']
})
export class AdmissionCommiteeMemberListComponent implements OnInit {

  constructor(private service: AdmissionCommiteeMemberServerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  header: string = "List of Admission Commitee Members";

  admissionCommiteeMembers: AdmissionCommiteeMember[];
  message: string = null;
  errorMessage: string = null;


  delete(admissionCommiteeMemberId: number): void {
    this.service.deleteAdmissionCommiteeMember(admissionCommiteeMemberId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getAdmissionComiteeMembers().subscribe(
      (data) => {
        this.admissionCommiteeMembers = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.details;
        //console.log(failResponse)
      }
    )
  }

  admissionCommiteeMemberName: any;
  Search() {
    if (this.admissionCommiteeMemberName == "") {
      this.ngOnInit();
    }
    else {
      this.admissionCommiteeMembers = this.admissionCommiteeMembers.filter(res => {
        return res.admissionCommiteeMemberName.toLocaleLowerCase().match(this.admissionCommiteeMemberName.toLocaleLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  setMyStyle() {
    let styles = {
      'background': 'linear-gradient(to right, #36d1dc, #5b86e5)',
      'background-repeat': 'no-repeat'
    };
    return styles;
  }


}
