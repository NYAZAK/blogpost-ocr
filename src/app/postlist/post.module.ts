import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewpostComponent } from './newpost/newpost.component';

const COMPONENTS = [
  PostListComponent,
  PostListItemComponent,
  NewpostComponent,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class PostModule { }
