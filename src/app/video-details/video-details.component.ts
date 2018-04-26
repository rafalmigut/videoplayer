import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.activatedRoute);
  }

  getVideoUrl() {
    return `//www.youtube.com/embed/${this.id}`;
  }

}
