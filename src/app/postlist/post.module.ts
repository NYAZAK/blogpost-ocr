import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class PostModule { }
