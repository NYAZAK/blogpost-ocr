import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  public post: Post[];
  NewPostForm: FormGroup;
  error: boolean = false;
  success: boolean =  false;
  constructor(private PService: PostsService, private formBuild: FormBuilder) { }
  ngOnInit() {
    this.createPost();
  }

  createPost(){
    this.NewPostForm = this.formBuild.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required],
      'loveIts': 0,
      'created_at': new Date(),
    });
  }
  AddNewPost(){
    this.PService.newPost(this.NewPostForm.value);
    console.log(this.NewPostForm.value);
    if(this.NewPostForm.valid){
      this.success = true; 
    } else{
      this.error = true;
    }
  }

  
}
