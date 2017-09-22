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

  public currentUser: User = null;

  ngOnInit() {
    this.userService.getUserFriends(this.authenticationService.currentUser);
    this.userService.getUsersFromServer();
    this.currentUser = this.authenticationService.currentUser;
  }

  get friends (): User [] {
    return this.userService.getFriends();
  }

  get users (): User [] {
    return this.userService.getUsers().filter(e => e.id != this.currentUser.getId());
  }

  public checkIfUserIsFriend(userId: number){
    function compareId(element) {
      return element === userId;
    }
    return this.currentUser.getFriends().find(compareId) != null;
  }

  public addFriendToList(friendId: number) {
    if(this.currentUser.getFriends().indexOf(friendId) === -1){
      this.currentUser.getFriends().push(friendId);
      this.updateFriends(this.currentUser.getFriends());
    }
  }

  public removeFriendFromList(friendId) {
    if(this.currentUser.getFriends().indexOf(friendId) !== -1){
      this.currentUser.getFriends().splice(this.currentUser.getFriends().indexOf(friendId),1);
      this.updateFriends(this.currentUser.getFriends());
    }
  }

  public updateFriends(friends: number[]) {
    this.userService.updateUserFriends(this.currentUser.getId(), friends);
  }

}
