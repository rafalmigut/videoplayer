import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {YoutubeApiService} from '../youtube-api.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  id: string;
  video;

  constructor(private activatedRoute: ActivatedRoute,
              private sanitizer: Sanitizer,
              private youtubeApi: YoutubeApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.video = this.youtubeApi.getVideo(this.id);
      }
    );
    console.log(this.youtubeApi.getApiResponse());
  }

  getVideoUrl() {
    return `//www.youtube.com/embed/${this.id}`;
  }


}
