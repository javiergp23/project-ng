import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [Validators.required, Validators.max(300)]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  handleSubmit(): void{
    console.log(this.movieForm.value)
    this.movieForm.reset();
  }
}
