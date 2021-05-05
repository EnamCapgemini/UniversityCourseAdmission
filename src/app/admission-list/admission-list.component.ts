import { Component, OnInit } from '@angular/core';
import { Admission } from 'src/model/admission';
import { AdmissionServerService } from '../server-service/admission-server.service';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.css']
})
export class AdmissionListComponent implements OnInit {

  constructor(private service: AdmissionServerService) { }

  header: string = "List of Admissions";

  ngOnInit(): void {
    this.loadData();
  }

  admissions: Admission[];
  message: string = null;
  errorMessage: string = null;

  delete(admisssionId: number): void {
    this.service.deleteAdmission(admisssionId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {
    this.service.getAdmissions().subscribe(
      (data) => {
        this.admissions = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }
}
