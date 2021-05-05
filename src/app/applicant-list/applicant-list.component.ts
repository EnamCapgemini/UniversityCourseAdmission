import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/model/applicant';
import { ApplicantServerService } from '../server-service/applicant-server.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  constructor(private service: ApplicantServerService) { }

  header: string = "List of Applicants";

  ngOnInit(): void {
    this.loadData();
  }
  applicants: Applicant[];
  message: string = null;
  errorMessage: string = null;

  delete(applicantId: number): void {
    this.service.deleteApplicant(applicantId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getApplicants().subscribe(
      (data) => {
        this.applicants = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }
}
