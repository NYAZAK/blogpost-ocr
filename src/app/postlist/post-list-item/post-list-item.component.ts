import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
 @Input() public post: Post[];
 loveIt: string = 'Love It';
 dontLoveIt: string = 'Don\'t love it';
  constructor() { }

  ngOnInit() {
  }

  loveit(){
  
  }

  dontloveit(){

  }
}
