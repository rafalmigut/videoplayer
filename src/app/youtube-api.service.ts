import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

const API_PATH = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDxABPqeNd2s-Lg-AbGnipNjURg3QR3jUI';

@Injectable()
export class YoutubeApiService {
  constructor(private http: HttpClient) {}

  getVideos(query: string) {
    return this.http.get(`${API_PATH}/search?q=${query}&part=snippet&key=${API_KEY}`)
      .map((response: Response) => response)
      .map((data: any) => data.items);
  }
}
