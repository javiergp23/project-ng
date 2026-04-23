import { Component, OnInit } from '@angular/core';
import { Header } from "../../components/header/header";
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movieService';
import Movie from '../../models/Movie';
import { UsersService } from '../../services/usersService';

@Component({
  selector: 'app-details',
  imports: [Header],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {

  selectedMovie?: Movie;


  constructor(private route: ActivatedRoute, private movieService: MovieService, public usersService: UsersService){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
    const movieName = decodeURIComponent(this.route.snapshot.params['movieName']);
    console.log(movieName);
    this.selectedMovie = this.movieService.getMovie(movieName);
      this.movieService.getMovie(movieName);
  }

  getUser(id: number){
    this.usersService.getUser(id).subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      }
    })
  }
}
