import { Injectable, Input } from '@angular/core';
import { Post } from '../shared/post.model'; 
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  @Input() public post: Post[];
  
  addPost(newpost){
    this.post.push(newpost);
  }

 


}
