import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import {YoutubeApiService} from './youtube-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [YoutubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
