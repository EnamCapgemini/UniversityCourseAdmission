import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission } from 'src/model/admission';
import { AdmissionServerService } from '../server-service/admission-server.service';

@Component({
  selector: 'app-admission-commitee-member-status',
  templateUrl: './admission-commitee-member-status.component.html',
  styleUrls: ['./admission-commitee-member-status.component.css']
})
export class AdmissionCommiteeMemberStatusComponent implements OnInit {

  admission: Admission = null;

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service: AdmissionServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // this.route.paramMap.subscribe(
    //   (params) => {
    //     let aid: number = +params.get('admissionId');

    //     this.service.getAdmission(aid).subscribe(
    //       (data) => {
    //         this.admission = data
    //       },
    //       (fail) => {
    //         this.errorMessage = fail.error.errorMessage;
    //       }
    //     )
    //   }
    // )
  }

  updated() {
    this.service.updateAdmission(this.admission).subscribe(
      (message) => {
        this.successMessage = message
        this.validationMessages = null
        this.errorMessage = null
      },
      (failure) => {
        this.successMessage = null;
        this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = JSON.parse(failure.error).errorMessage;
      }

    )

  }

  goBack() {
    this.router.navigate(["admission-commitee-member-list"]);
  }

}
