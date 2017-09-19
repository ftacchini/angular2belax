import { AuthenticationService } from './../../services/authentication.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public postText: string = "";

  constructor(public postService: PostService, public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.postService.getPostsByUserId(this.authenticationService.currentUser.getId());
  }

  get posts () {
    return this.postService.getPosts();
  }
  
  public addPost(postText: string) {
    if(postText.trim()!==""){
      this.postText = "";
      this.postService.addPost(this.authenticationService.currentUser.getId(), postText);
    }
  }

}
