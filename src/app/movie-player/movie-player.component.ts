import { Component, OnInit, ViewChild, AfterViewInit, Renderer } from '@angular/core';
import { MoviePlayerService, Movie } from '../shared/';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss']
})
export class MoviePlayerComponent implements OnInit {

  movies: Movie[];
  @ViewChild('embeddedPlayer')
  video: any;

  constructor(private moviePlayer: MoviePlayerService, private renderer: Renderer) { }

  ngOnInit() {
    this.moviePlayer.getMovies().subscribe((data: Movie[]) => this.movies = data);
  }

  playMovie(movie: Movie) {
      const { trailer } = movie;
      const autoPlayTrailer = `${trailer}?autoplay=1`;
      this.renderer.setElementProperty(this.video.nativeElement, 'src', autoPlayTrailer);
  }
}
