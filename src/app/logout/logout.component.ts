import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  ngOnInit() {
  }

  message:any;
  errorMessage:any;

  constructor(authService:AuthenticationService) {
    if(authService.isLoggedIn()){
      authService.logout().subscribe(
        (result) => {
          localStorage.removeItem('token');
          this.message="You have been successfully logged out";
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      this.errorMessage="You have not loogged in";
    }
    
   }

}
