import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityStaffs } from 'src/model/universityStaffs';
import { UniversityStaffServerService } from '../server-service/university-staff-server.service';

@Component({
  selector: 'app-university-staff-update',
  templateUrl: './university-staff-update.component.html',
  styleUrls: ['./university-staff-update.component.css']
})
export class UniversityStaffUpdateComponent implements OnInit {
  staff: UniversityStaffs=null;

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  
  roles: any[] = [
    { id: 1, name: 'STAFF' },
    { id: 2, name: 'COMMITTEE' }
  ];

 
  constructor(private service: UniversityStaffServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let staffid: number = +params.get('staffId');

        this.service.getStaff(staffid).subscribe(
          (data) => {
            this.staff = data
          },
          (fail) => {
            this.errorMessage = fail.error.errorMessage;
          }
        )
      }
    )
  }


  updatedRole(event:string){
    if(event=="STAFF" || event=="COMMITTEE")
      return true;
      else
      return false;
  }

  updated() {
    if(this.updatedRole){
    this.service.updateStaff(this.staff).subscribe(
      (message) => {
        this.successMessage=message
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
  }


  goBack(){
    this.router.navigate(["staff-list"]);
  }
}

