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

  login(userName: string, password: string) {

    this.userService.getUserByNameAndPassword(userName, password).subscribe(data => {
      if(data && data[0] && data[0].id){
        console.log(data[0]);
        this.currentUser = new User();
        this.currentUser.setId(data[0].id);
        this.currentUser.setName(data[0].name);
        this.currentUser.setLastName(data[0].lastname);
        this.currentUser.setIsLogged(data[0].logged);
        this.currentUser.setUserName(data[0].username);
        this.currentUser.setFriends(data[0].friends);
        this.isLogged = true;
      }
    });
      
  }

  logout(): void {
    this.isLogged = false;
    this.currentUser = null;
  }

}
