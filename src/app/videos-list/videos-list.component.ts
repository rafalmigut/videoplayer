import {Component, Input, OnInit} from '@angular/core';
import {YoutubeApiService} from '../youtube-api.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  @Input('video') video;
  // videosList;
  constructor(private youtubeApi: YoutubeApiService) { }

  ngOnInit() {
    console.log(this.video);
    // this.videosList = this.youtubeApi.getVideosList();
    // console.log(this.youtubeApi.getVideosList());
  }

  check() {
    // console.log(this.video);
    // this.videosList = this.youtubeApi.getVideosList();
    // console.log(this.youtubeApi.getVideosList());
  }

}
