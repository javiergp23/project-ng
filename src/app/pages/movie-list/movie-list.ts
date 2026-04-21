import { Component } from '@angular/core';
import { MovieService } from '../../services/movieService';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  constructor(public movieService: MovieService){}
}
