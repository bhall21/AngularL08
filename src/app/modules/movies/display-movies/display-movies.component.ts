import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from '../../../shared/models/movei';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {

private moviesRoute = 'http://localhost:3000/movies';

public movies: Movie[];

  constructor(private http: HttpClient) { }

  getMovies() {
    this.http.get<Movie[]>(this.moviesRoute).subscribe(
      movies => {
        this.movies=movies;
        console.log('Movies',this.movies);
      }
    );
  }

  ngOnInit() {
    this.getMovies();
  }

}
