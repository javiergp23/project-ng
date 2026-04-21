import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieForm } from './pages/movie-form/movie-form';
import { Details } from './pages/details/details';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'movies', component: MovieList},
  {path: 'create', component: MovieForm},
  {path: 'movie/:movieName', component: Details}
];
