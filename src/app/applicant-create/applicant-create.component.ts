import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/model/applicant';
import { ApplicantServerService } from '../server-service/applicant-server.service';

@Component({
  selector: 'applicant-create',
  templateUrl: './applicant-create.component.html',
  styleUrls: ['./applicant-create.component.css']
})
export class ApplicantCreateComponent implements OnInit {
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:ApplicantServerService) { }

  ngOnInit() {
  }
  createNew(data: Applicant) {
    this.service.addApplicant(data).subscribe(
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
