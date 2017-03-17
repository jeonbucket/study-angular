import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  constructor(private _http: Http) {

  }

  getSpotifyData(query: string) {
    return this._http.get("https://api.spotify.com/v1/search?q=" + query + "&type=artist")
      .map(res => res.json());
  }
}
