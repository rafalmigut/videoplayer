import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

const API_PATH = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDxABPqeNd2s-Lg-AbGnipNjURg3QR3jUI';

@Injectable()
export class YoutubeApiService {
  videosList;
  apiResponse;
  constructor(private http: HttpClient) {}

  getVideos(query: string) {
    return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}`)
      .map((response: Response) => response)
      .map((data: any) => data.items);
  }

  getResponse(query: string) {
    return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}&pageToken=CAUQAA`)
      .map((response: Response) => response);
  }

  getVideo(id: string) {
    return this.videosList.slice().find(
      video => { return video.id.videoId === id; }
    );
  }

  getApiResponse() {
    return this.apiResponse;
  }

  search(query: string) {
    this.getVideos(query).subscribe(data => this.videosList = data);
    this.getResponse(query).subscribe(data => this.apiResponse = data);
  }
}
