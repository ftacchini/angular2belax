import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './../model/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  public isLogged : boolean = false;
  public currentUser: User = null;

  public redirectUrl : string = "";

  constructor(public userService: UserService, private http: HttpClient) { }

  public setLoggedUser(user: User) {
    this.currentUser = new User();
    this.currentUser.setId(user.id);
    this.currentUser.setName(user.name);
    this.currentUser.setLastName(user.lastName);
    this.currentUser.setIsLogged(user.logged);
    this.currentUser.setUserName(user.userName);
    this.currentUser.setFriends(user.friends);
    this.currentUser.setLikes(user.likes);
  }

  logout(): void {
    this.isLogged = false;
    this.currentUser = null;
  }

}
