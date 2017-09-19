import { AuthenticationService } from './../../services/authentication.service';
import { PageNotFoundComponent } from './../../components/page-not-found/page-not-found.component';
import { FriendDetailComponent } from './../../components/friend-detail/friend-detail.component';
import { LoginComponent } from './../../components/login/login.component';
import { FriendsComponent } from './../../components/friends/friends.component';
import { PostsComponent } from './../../components/posts/posts.component';
import { UserDetailComponent } from './../../components/user-detail/user-detail.component';
import { HomeComponent } from './../../components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../../services/auth-guard.service';

const appRoutes : Routes = [
{
    path: '',
    canActivate: [AuthGuard],
    children: [
    { path: 'profile', component: UserDetailComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'friends/:id', component: FriendDetailComponent },
    { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
},
{ path: 'login', component: LoginComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ]
})
export class AppRoutingModule { }
