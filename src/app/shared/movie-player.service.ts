import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from './movie';

const API_URL = 'https://scotch-mvplayer-api.herokuapp.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class MoviePlayerService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const sortName = (a: Movie, b: Movie) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return this.http.get<Movie[]>(API_URL)
      .pipe(
        map((m: Movie[]) => m.sort(sortName))
      );
  }
}
