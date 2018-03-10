import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import {Observable} from 'rxjs/Observable';

const API_URL: string = "https://scotch-mvplayer-api.herokuapp.com/api/v1";

@Injectable()
export class MoviePlayerService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(API_URL);
  }
}
