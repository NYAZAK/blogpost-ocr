import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
 @Input() public post: Post;
//  @Output('loveevent') public loveIt = new EventEmitter();

 loveItbtn: string = 'Love It';
 dontLoveItbtn: string = 'Don\'t love it';

  constructor() { }

  ngOnInit() {
    console.log(this.post.loveIts);
  }

  loveit(){
    this.post.loveIts++;
    // this.loveIt.emit({
    //   value: this.post.loveIts
    // })
  }

  dontloveit(){
    this.post.loveIts--;
    // this.loveIt.emit({
    //   value: this.post.loveIts
    // })
  }
}
