import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.html',
  styleUrl: './form-control.css',
})
export class Formulario {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(){
    this.name = new FormControl();
    this.duration = new FormControl();
    this.director = new FormControl();
    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  handleSubmit(){
    console.log(this.movieForm)
  }
}
