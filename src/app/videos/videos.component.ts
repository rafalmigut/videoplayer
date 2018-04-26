import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from '../youtube-api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videosList;
  query = '';

  constructor(private youtubeApi: YoutubeApiService) {
  }

  ngOnInit() {
  }

  search(query: string) {
    this.youtubeApi.getVideos(query).subscribe(data => this.videosList = data);
    console.log(this.videosList);
  }

  onSubmit(form: NgForm) {
    this.query = form.value.query;
    if (form.dirty) {
      this.search(this.query);
    }
  }
}
