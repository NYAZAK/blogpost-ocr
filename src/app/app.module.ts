import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { PostsService } from './shared/services/posts.service';
import { PostModule } from './postlist/post.module';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire'; 
import { AngularFireDatabaseModule } from "@angular/fire/database";

const config: FirebaseAppConfig =  
  {  
    apiKey: "AIzaSyAU6GXZwkwB7RNXTvCeAVAlXwUETfsueHg",
    authDomain: "posttpopenclassroom.firebaseapp.com",
    databaseURL: "https://posttpopenclassroom.firebaseio.com",
    projectId: "posttpopenclassroom",
    storageBucket: "posttpopenclassroom.appspot.com",
    messagingSenderId: "338363363206"
  }; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    PostModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
