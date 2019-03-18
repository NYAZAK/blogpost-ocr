import { Component, OnInit} from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public Posts: Post[];
  postSubscription: Subscription;
  constructor(private PService: PostsService) { }

  ngOnInit(){
    
  }
  
}
