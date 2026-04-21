import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[];

  constructor(){
    this.movies = [
      {
        name: "El senor de los anillos",
        duration: 300,
        direactor: "Carlos Saura"
      },
      {
        name: "La naranja mecanica",
        duration: 120,
        direactor: "Stanley Kubrick"
      },

    ]
  }

  addMovie(movie: Movie){
    this.movies.push(movie);
  }

  getMovie(name: string): Movie | undefined {
    return this.movies.find((movie) => movie.name == name )
  }

}
