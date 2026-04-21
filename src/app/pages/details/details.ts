import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movieService';
import Movie from '../../models/Movie';

@Component({
  selector: 'app-details',
  imports: [Header],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  selectedMovie?: Movie;


  constructor(private route: ActivatedRoute, private movieService: MovieService){
    const movieName = decodeURIComponent(this.route.snapshot.params['movieName']);
    console.log(movieName);
    this.selectedMovie = this.movieService.getMovie(movieName);
    movieService.getMovie(movieName);
  }
}
