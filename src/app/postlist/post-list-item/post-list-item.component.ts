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
//  @Output('loveevent') public loveIt = new EventEmitter();

  constructor(private afdb: AngularFireDatabase, private PostS: PostsService) { }

  ngOnInit() {
  
   this.posts =  this.PostS.getAllPosts();
    console.log(this.posts.id, "idex");
  }

  loveit(){
    this.posts.loveIts++;
    // this.loveIt.emit({
    //   value: this.post.loveIts
    // })
  }

  dontloveit(){
    this.posts.loveIts--;
    // this.loveIt.emit({
    //   value: this.post.loveIts
    // })
  }


  deletepost(post){
    console.log(post, 'id');
   this.PostS.deletepost(post.key);
  }

}
