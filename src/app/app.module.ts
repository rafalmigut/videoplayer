import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import {YoutubeApiService} from './youtube-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import {AppRoutingModule} from './app-routing.module';
import { VideosComponent } from './videos/videos.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import { VideoDetailsComponent } from './video-details/video-details.component';


@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    SigninComponent,
    VideosComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [YoutubeApiService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
