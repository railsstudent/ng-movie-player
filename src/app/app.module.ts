import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviePlayerComponent,
    VideoListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
