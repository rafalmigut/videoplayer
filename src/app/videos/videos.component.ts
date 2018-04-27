import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from '../youtube-api.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videosList;
  query = '';

  constructor(private youtubeApi: YoutubeApiService,
              private router: Router) {
  }

  ngOnInit() {
  }

  search(query: string) {
    // this.youtubeApi.getVideos(query).subscribe(data => this.videosList = data);
    this.youtubeApi.search(query);
  }

  onSubmit(form: NgForm) {
    this.query = form.value.query;
    if (form.dirty) {
      this.search(this.query);
    }
    this.router.navigate(['/videos/list']);
  }
}
