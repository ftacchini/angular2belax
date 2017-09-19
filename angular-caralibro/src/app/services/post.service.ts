import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PostService {

  public posts: Post[] = [];

  constructor(private http: HttpClient) { }

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

  public addLike(postId: number) {
    let p: Post = this.posts.filter(post => post.id = postId)[0];
    if(p){
      const body = {likes: p.getLikes()+1};
      
      this.http.patch('http://localhost:3000/posts/'+p.id, body, {
        headers: new HttpHeaders().set('Content-Type','application/json')
      }).subscribe(data => {
        this.getPostsByUserId(p.getUserId());
      })
    }
  }

}
