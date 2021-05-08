import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/model/course';
import { ApplicantServerService } from '../server-service/applicant-server.service';
import { CourseServerService } from '../server-service/course-server.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service:CourseServerService,service2:ApplicantServerService,private service3:AuthenticationService,private route: ActivatedRoute, private router: Router) { }
  isLoggedin:boolean = false;

  role: string = null;
  roleMessage: string = null;

  ngOnInit(): void {
    this.loadData();
    if(this.service3.isLoggedIn()) {
      this.isLoggedin = true;
      this.role = localStorage.getItem('role');
      if(this.role != 'STAFF') {
        this.roleMessage = ' Access Denied for  '+this.role;
      }
    }
    //this.isLoggedin=this.service3.isLoggedIn();

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
courseName:any;
  Search(){
    if (this.courseName==""){
      this.ngOnInit();
    }
    else{
      this.courses=this.courses.filter(res=>{
        return res.courseName.toLocaleLowerCase().match(this.courseName.toLocaleLowerCase());
      });
    }
  }

  key:string='id';
  reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  setMyStyle() {
    let styles = { 
      'background':'linear-gradient(to left, #dbe6f6, #c5796d)',
      'background-repeat':'no-repeat'
    };
    return styles;
}
}
