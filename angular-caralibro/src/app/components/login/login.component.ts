import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
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

  constructor(public authenticationService: AuthenticationService, 
    public userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public login(userName: string, userPassword: string){
    if(userName.trim() != "" && userPassword.trim() != "") {
      this.userService.getUserByNameAndPassword(userName.trim(), userPassword.trim()).subscribe(data =>{
        if(data && data[0] && data[0].id){
          this.userName = "";
          this.userPassword = "";
          this.authenticationService.setLoggedUser(data[0]);
          this.authenticationService.isLogged = true;
          this.router.navigate(['/profile']);
        } else {
          console.log("User name or password are wrong.");
        }
      });
    }
  }

/*   public login(userName: string, userPassword: string) {
    if(userName != "" && userPassword != ""){
      this.userName = "";
      this.userPassword = "";
      this.authenticationService.login(userName, userPassword);
      if(this.authenticationService.isLogged) {
        this.router.navigate(['/profile']);
      }
    }
  } */

}
