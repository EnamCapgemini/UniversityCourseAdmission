import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission } from 'src/model/admission';
import { AdmissionServerService } from '../server-service/admission-server.service';

@Component({
  selector: 'app-admission-create',
  templateUrl: './admission-create.component.html',
  styleUrls: ['./admission-create.component.css']
})
export class AdmissionCreateComponent implements OnInit {
  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  constructor(private service:AdmissionServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() : void {
  }

  createNew(data: Admission) {
    this.service.addAdmission(data).subscribe(
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
   // console.log(data);
  }
  

}
