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
  info: any = null;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()) {
      this.authenticationService.getUserDetails().subscribe(
        (result) => {
          this.userdetails = result;
        },
        (fail) => {
          this.errorMessage = fail.error.errorMessage;
          
        }
      );

      this.info = this.authenticationService.getSensitive().subscribe(
        (result) => {
          this.info = result;
        },
        (fail) => {
        }
      );
    }
  }

}
