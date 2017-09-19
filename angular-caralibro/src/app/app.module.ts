import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { FriendDetailComponent } from './components/friend-detail/friend-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailComponent,
    PostsComponent,
    FriendsComponent,
    HomeComponent,
    FriendDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
