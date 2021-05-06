import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { UniversityStaffs } from 'src/model/universityStaffs';
import { UniversityStaffServerService } from '../server-service/university-staff-server.service';

@Component({
  selector: 'app-university-staff-list',
  templateUrl: './university-staff-list.component.html',
  styleUrls: ['./university-staff-list.component.css']
})
export class UniversityStaffListComponent implements OnInit {
  constructor(private service: UniversityStaffServerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  header: string = "List of University Staff Members";

  staffs: UniversityStaffs[];
  message: string = null;
  errorMessage: string = null;

  delete(staffId: number): void {
    this.service.deleteStaff(staffId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
      
    );

  }

  loadData(): void {

    this.service.getStaffs().subscribe(
      (data) => {
        this.staffs = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }
}
