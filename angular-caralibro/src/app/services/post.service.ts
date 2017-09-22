import { User } from './../model/user';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PostService {

  public posts: Post[] = [];

  constructor(private http: HttpClient, private userService: UserService, 
    private authenticationService: AuthenticationService) { }

  public getPosts() {
    return this.posts;
  }

  public getPostsByUserId(userId: number) {
    this.http.get<Post[]>('http://localhost:3000/posts?userId='+userId).subscribe(data => {
      this.posts = data;
    });
  }

  public addPost(userId: number, text: string) {
    const body = {userId: userId, text: text, likes: 0};
    
    this.http.post('http://localhost:3000/posts', body, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }).subscribe(data => {
      this.getPostsByUserId(userId);
    });
  }

  public addLike(postId: number, voter: User) {
    let p: Post = this.posts.filter(post => post.id = postId)[0];
    if(p){
      const body = {likes: p.likes+1};
      
      this.http.patch('http://localhost:3000/posts/'+p.id, body, {
        headers: new HttpHeaders().set('Content-Type','application/json')
      }).subscribe(data => {
        this.getPostsByUserId(p.userId);

        //Add like to user likes
        voter.addLike(p.id);
        this.userService.updateUserLikes(voter);

      })
    }
  }

  public removeLike(postId: number, voter: User) {
    let p: Post = this.posts.filter(post => post.id = postId)[0];
    console.log(this.posts);
    console.log(p);
    if(p){
      const body = {likes: p.likes-1};
      
      this.http.patch('http://localhost:3000/posts/'+p.id, body, {
        headers: new HttpHeaders().set('Content-Type','application/json')
      }).subscribe(data => {
        this.getPostsByUserId(p.userId);

        //Remove like from user
        voter.removeLike(postId);
        this.userService.updateUserLikes(voter);
      })
    }
  }

}
