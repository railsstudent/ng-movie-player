import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { MoviePlayerService } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    MoviePlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MoviePlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
