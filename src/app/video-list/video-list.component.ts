import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../shared';

@Component({
  selector: 'app-video-list',
  template: `
    <div class="video-choices">
      <div class="video-container" *ngFor="let movie of movies"  (click)="movieClicked.next(movie)">
          <img [src]="movie.poster">
          <div class="video-descriptions">
          <p>{{movie.name}} ({{movie.year}})</p>
          </div>
      </div>
    </div>
  `,
  styleUrls: ['./video-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListComponent {

  @Input()
  movies: Movie[];

  @Output()
  movieClicked = new EventEmitter<Movie>();
}
