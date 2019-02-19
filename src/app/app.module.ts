import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponent } from './postlist/post-list/post-list.component';
import { PostListItemComponent } from './postlist/post-list-item/post-list-item.component';
import { NewpostComponent } from './postlist/newpost/newpost.component';
import { NavbarComponent } from './header/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewpostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
