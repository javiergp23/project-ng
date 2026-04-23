import { Component, OnInit } from '@angular/core';
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
export class Details implements OnInit {

  selectedMovie?: Movie;


  constructor(private route: ActivatedRoute, private movieService: MovieService){

  }

  ngOnInit(): void {
    const movieName = decodeURIComponent(this.route.snapshot.params['movieName']);
    console.log(movieName);
    this.selectedMovie = this.movieService.getMovie(movieName);
      this.movieService.getMovie(movieName);
  }
}
