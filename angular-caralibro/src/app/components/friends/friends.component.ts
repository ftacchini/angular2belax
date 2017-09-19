import { User } from './../../model/user';
import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(public userService: UserService, public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userService.getUserFriends(this.authenticationService.currentUser);
  }

  get friends (): User [] {
    return this.userService.getFriends();
  }

}
