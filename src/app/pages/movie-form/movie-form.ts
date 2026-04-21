import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../services/movieService';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css',
})
export class MovieForm {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(public movieService: MovieService){
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.director = new FormControl('', Validators.required);

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  handleSubmit(): void{
    console.log(this.movieForm.value)
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }

}
