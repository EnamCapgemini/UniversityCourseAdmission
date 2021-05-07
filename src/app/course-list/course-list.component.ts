import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/model/course';
import { ApplicantServerService } from '../server-service/applicant-server.service';
import { CourseServerService } from '../server-service/course-server.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service:CourseServerService,service2:ApplicantServerService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  header: string = "List of Courses";

  courses: Course[];
  message: string = null;
  errorMessage: string = null;

  

  loadData(): void {

    this.service.getCourses().subscribe(
      (data) => {
        this.courses = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.details;
      }
    )
  }




goApply(){
  this.router.navigate(["applicant-create"]);
}
}