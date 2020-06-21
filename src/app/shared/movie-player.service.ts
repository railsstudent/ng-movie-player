import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from './movie';

const API_URL = 'https://scotch-mvplayer-api.herokuapp.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class MoviePlayerService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const sortName = (a: Movie, b: Movie) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    if (localStorage.getItem('ng-movies')) {
      const movies = JSON.parse(localStorage.getItem('ng-movies')) as Movie[];
      return of(movies);
    }

    return this.http.get<Movie[]>(API_URL)
      .pipe(
        map(movies => movies.sort(sortName)),
        tap(movies => localStorage.setItem('ng-movies', JSON.stringify(movies)))
      );
  }
}
