import { AuthenticationService } from './authentication.service';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';

// All the RxJS stuff we need
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private users: User [] = [];

  private friends: User [] = [];
  
  constructor(private http: HttpClient) { }

  public getUsersFromServer() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(data => {
      this.users = data;
    });
  }

  public getFriends() {
    return this.friends;
  }

  public getUsers() {
    return this.users;
  }

  public getUserFriends(user: User) {
     let friends = user.getFriends();
     let friendsAmount = friends.length;
     if(friendsAmount) {
       let filter = "?id=";
       for(let i = 0; i < friendsAmount; i++) {
         if(i < friendsAmount-1) {
          filter += friends[i] + "&id=";
         } else {
           filter += [i];
         }
       }
       this.http.get<User[]>('http://localhost:3000/users' + filter).subscribe(data => {
        this.friends = data;
       });

     }
  }

  public getUserById(userId: number): User {
    this.http.get<User>('http://localhost:3000/users/'+userId).subscribe(data => {
      if(data && data[0] && data[0].id){
        let u : User = new User();
        u.setId(data[0].id);
        u.setName(data[0].name);
        u.setLastName(data[0].lastname);
        u.setIsLogged(data[0].logged);
        u.setUserName(data[0].username);
        u.setFriends(data[0].friends);
        return u;
      }
    });
    return null;
  }

  public getUserByNameAndPassword(userName: string, password: string): Observable<User> {
    let findUserByLoginUrl = 'http://localhost:3000/users?username='+userName+'&password='+password;
    return this.http.get<User>(findUserByLoginUrl);
  }

  public updateUserFriends(userId: number, friends: number[]) {
    const body = {friends: friends};
    
    this.http.patch('http://localhost:3000/users/'+userId, body, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }).subscribe(data => {
        this.getUsersFromServer();
      }
    );
  }

  public updateUserLikes(user: User) {
    const body = {likes: user.getLikes()};
    
    this.http.patch('http://localhost:3000/users/'+user.getId(), body, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }).subscribe(data => {
        this.getUsersFromServer();
      }
    );
  }

}
