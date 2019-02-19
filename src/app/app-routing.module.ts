import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './postlist/post-list/post-list.component';
import { NewpostComponent } from './postlist/newpost/newpost.component';

const routes: Routes = [
  {path: 'post', component: PostListComponent},
  {path: 'new', component: NewpostComponent},
  {path: '',  redirectTo: '/post', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
