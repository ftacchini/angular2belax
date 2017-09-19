import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Cara Libro';

  constructor(public userService: UserService, 
    public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  get userIsLogged () {
    return this.authenticationService.isLogged;
  } 

}
