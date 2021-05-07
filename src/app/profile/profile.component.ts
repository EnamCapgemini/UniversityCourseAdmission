import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/model/userDetails';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userdetails: UserDetails = null;

  errorMessage: String = null;
  successMessage:string=null;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()) {
      this.authenticationService.getUserDetails().subscribe(
        (result) => {
          this.userdetails = result;
          this.successMessage="You have successfully logged in.";
        },
        (fail) => {
          this.errorMessage = fail.error.errorMessage;
          
        }
      );
    }
    else {
      this.errorMessage = "You have not logged in! Please Log in.";
    }
  }
  setMyStyle() {
    let styles = {
      'background':'linear-gradient(#dbe6f6, #c5796d)',
      'background-repeat':'no-repeat'
    };
    return styles;
  }
}
