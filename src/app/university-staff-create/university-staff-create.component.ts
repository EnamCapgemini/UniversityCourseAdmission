import { Component, OnInit } from '@angular/core';
import { UniversityStaffs } from 'src/model/universityStaffs';
import { UniversityStaffServerService } from '../server-service/university-staff-server.service';

@Component({
  selector: 'app-university-staff-create',
  templateUrl: './university-staff-create.component.html',
  styleUrls: ['./university-staff-create.component.css']
})
export class UniversityStaffCreateComponent implements OnInit {
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service: UniversityStaffServerService) { }

  ngOnInit() {
  }
  roles: any[] = [
    { name: 'STAFF' },
    { name: 'COMMITEE' }
  ];

  createNew(data: UniversityStaffs) {
    this.service.addStaff(data).subscribe(
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
    //console.log(data);

  }

}
