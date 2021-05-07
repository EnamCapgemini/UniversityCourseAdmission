import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  message: string = null;
  errorMessage: string = null;
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if(!this.authenticationService.isLoggedIn()) {
      this.message = "You have not logged in yet!!";
    }
  }

  changePassword(credentials) {
    this.authenticationService.changePassword(credentials).subscribe(
        (result) => {
        this.message = result;      
      },
         (fail) => {
          this.invalidLogin = true;
          this.errorMessage = fail.error.details;
        }
      );

  }

}
