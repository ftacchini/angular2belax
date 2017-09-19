import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  //public user: User;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log("oninit");
    //this.user = this.authenticationService.currentUser;
  }
  
  get user () : User {
    return this.authenticationService.currentUser;
  }
  

}
