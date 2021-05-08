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
          localStorage.clear();
          this.message="You have successfully logged out !";
        },
        (error) => {
          this.errorMessage= error.error;
        }
      );
    }
    else {
      this.errorMessage="You have not logged in! Please Log in to continue..";
    }  
   }

}
