import { Component } from '@angular/core';
import { MovieService } from '../../services/movieService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  constructor(public movieService: MovieService){}
}
