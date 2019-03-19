import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
public posts;

  constructor(private afdb: AngularFireDatabase, private PostS: PostsService) { }

  ngOnInit() {
  
   this.posts =  this.PostS.getAllPosts();
    console.log(this.posts.id, "idex");
  }

  loveit(){
    this.posts.loveIts++;
  }

  dontloveit(){
    this.posts.loveIts--;
  }


  deletepost(post){
    console.log(post, 'id');
   this.PostS.deletepost(post.key);
  }

}
