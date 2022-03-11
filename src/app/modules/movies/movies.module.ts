import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"

import { DisplayMoviesComponent } from './display-movies/display-movies.component';

@NgModule({
  declarations: [DisplayMoviesComponent],
  exports: [DisplayMoviesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
