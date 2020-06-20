import { ChangeDetectionStrategy, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePlayerService, Movie } from '../shared/';

@Component({
  selector: 'app-movie-player',
  template: `
    <ng-container>
      <app-video-list [movies]="movies$ | async" (movieClicked)="playMovie($event)"></app-video-list>
      <div class="video-player">
        <iframe src="" #embeddedPlayer></iframe>
      </div>
    </ng-container>
  `,
  styleUrls: ['./movie-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePlayerComponent implements OnInit {

  @ViewChild('embeddedPlayer', { static: true })
  video: any;
  movies$: Observable<Movie[]>;

  constructor(private moviePlayer: MoviePlayerService, private renderer: Renderer2) { }

  ngOnInit() {
    this.movies$ = this.moviePlayer.getMovies();
  }

  playMovie(movie: Movie) {
    const { trailer } = movie;
    if (trailer && this.video) {
      const autoPlayTrailer = `${trailer}?autoplay=1`;
      this.renderer.setProperty(this.video.nativeElement, 'src', autoPlayTrailer);
    }
  }
}
