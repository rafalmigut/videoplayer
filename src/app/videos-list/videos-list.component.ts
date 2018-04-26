import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  @Input('video') video;
  constructor() { }

  ngOnInit() {
    console.log(this.video);
  }

}
