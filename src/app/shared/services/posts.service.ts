import { Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import { Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostsService  {
posts;
postSubject = new Subject<Post[]>();
  constructor(private afdb: AngularFireDatabase) { }

  getAllPosts(){
    //return this.afdb.list('posts').valueChanges();
  this.posts =  this.afdb.list('posts').snapshotChanges().pipe(
      map( posts => {
        posts.map(post => ({key:  post.key, ... post.payload.val()}) )
      } )
    );
    console.log(this.posts, 'tous les posts');
        return this.posts;
  }
  newPost(f){
this.afdb.list('posts').push(f);
  }

  deletepost(f: string){
    console.log(f, 'idi lea key');
   return  this.afdb.list('posts').remove(f);
  }
}
