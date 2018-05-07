import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

const API_PATH = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDxABPqeNd2s-Lg-AbGnipNjURg3QR3jUI';

@Injectable()
export class YoutubeApiService {
  videosList;
  apiResponse;
  constructor(private http: HttpClient) {}

  videosListObservable: Observable<Array<any>>;

  getVideosList() {
    this.videosListObservable = new Observable<Array<any>>()
    return this.videosListObservable;
  }

  getVideos(query: string, pageToken: string = '') {
    if (pageToken === '') {
      return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}`)
        .map((response: Response) => response)
        .map((data: any) => data.items);
    } else {
      return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}&pageToken=${pageToken}`)
        .map((response: Response) => response)
        .map((data: any) => data.items);
    }
  }

  getResponse(query: string, pageToken: string = '') {
    if (pageToken === '') {
      return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}`)
        .map((response: Response) => response);
    } else {
      return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}&pageToken=${pageToken}`)
        .map((response: Response) => response);
    }
  }

  getVideo(id: string) {
    return this.videosList.slice().find(
      video => { return video.id.videoId === id; }
    );
  }

  getApiResponse() {
    return this.apiResponse;
  }

  search(query: string, pageToken: string = '') {
    this.getVideos(query, pageToken).subscribe(data => this.videosList = data);
    this.getResponse(query, pageToken).subscribe(data => this.apiResponse = data);
  }

  searchNext(query: string, pageToken: string = this.apiResponse.nextPageToken) {
    this.getVideos(query, pageToken).subscribe(data => this.videosList = data);
    this.getResponse(query, pageToken).subscribe(data => this.apiResponse = data);
  }

  searchPrevious(query: string, pageToken: string = this.apiResponse.prevPageToken) {
    this.getVideos(query, pageToken).subscribe(data => this.videosList = data);
    this.getResponse(query, pageToken).subscribe(data => this.apiResponse = data);
  }
}
