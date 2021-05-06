import { Component, OnInit } from '@angular/core';
import { AdmissionCommiteeMember } from 'src/model/admissionCommiteeMember';
import { AdmissionCommiteeMemberServerService } from '../server-service/admission-commitee-member-server.service';

@Component({
  selector: 'app-admission-commitee-member-create',
  templateUrl: './admission-commitee-member-create.component.html',
  styleUrls: ['./admission-commitee-member-create.component.css']
})
export class AdmissionCommiteeMemberCreateComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service: AdmissionCommiteeMemberServerService) { }

  ngOnInit() {
  }

  // roles: any[] = [
  //   { name: 'STAFF' },
  //   { name: 'COMMITEE' }
  // ];


  createNew(data: AdmissionCommiteeMember) {
    this.service.addAdmissionCommiteeMember(data).subscribe(
      (message) => {
        this.successMessage = message;
        this.validationMessages = null;
        this.errorMessage = null;
      },
      (failure) => {
        this.successMessage = null;
        this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = JSON.parse(failure.error).errorMessage;
      }

    )

  }


}
