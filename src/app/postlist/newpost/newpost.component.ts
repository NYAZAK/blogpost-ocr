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
    mypost;
    constructor(private PService: PostsService, private fb: FormBuilder) { }
    ngOnInit() {
      this.createPost();
      // this.PService.postSubject.subscribe(data => 
      //   {
      //   this.NewPostForm.get('title').patchValue(this.mypost.title),
      //   this.NewPostForm.get('content').patchValue(this.mypost.content),
      //   this.NewPostForm.get('loveIts').patchValue(this.mypost.loveIts),
      //   this.NewPostForm.get('created_at').patchValue(this.mypost.created_at),
      //   this.NewPostForm.get('key').patchValue(this.mypost.key)
      //   });
    }
  
    createPost(){
      this.NewPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: 0,
      created_at: Date.now(),
      key: ['']
    });
  }
  AddNewPost(post){
     let addpost = this.PService.newPost(
      {
        title: post.value.title,
        content: post.value.content,
        loveIts: 0,
        created_at : Date.now()

      }
     );
    if(this.NewPostForm.valid){
      this.success = true; 
    } else{
      this.error = true;
    }

    console.log(addpost,  post, 'ici le add post et le post pushé');
  }

  
}
