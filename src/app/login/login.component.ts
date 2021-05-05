import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  message: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

    ngOnInit() {
    }

  signIn(credentials) {
    this.authenticationService.login(credentials)
      .subscribe(result => {
        //console.log(result);
        this.router.navigate(['/profile']);
        
      },
         fail => {
          console.log(fail);
          this.invalidLogin = true;
          this.message = fail.error.details;
        }
      );

  }
}
