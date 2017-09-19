import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName = "";
  public userPassword = "";

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public login(userName: string, userPassword: string) {
    if(userName != "" && userPassword != ""){
      this.userName = "";
      this.userPassword = "";
      this.authenticationService.login(userName, userPassword);
      if(this.authenticationService.isLogged) {
        this.router.navigate(['/profile']);
      }
    }
  }

}
