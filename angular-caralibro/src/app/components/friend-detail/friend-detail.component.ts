import { AuthenticationService } from './../../services/authentication.service';
import { element } from 'protractor';
import { PostService } from './../../services/post.service';
import { Post } from './../../model/post';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, 
    private postService: PostService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.postService.getPostsByUserId(this.id);
   });
  }

  get posts (): Post [] {
    return this.postService.getPosts();
  }

  public alreadyLiked(postId: number): boolean {
    return this.authenticationService.currentUser.getLikes().find(p => p == postId) != null; 
  }

  public addLike(postId: number) {
    this.postService.addLike(postId, this.authenticationService.currentUser);
  }

  public removeLike(postId: number) {
    this.postService.removeLike(postId, this.authenticationService.currentUser);
  }

}
