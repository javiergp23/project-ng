import { Component } from '@angular/core';

@Component({
  selector: 'app-constructor',
  imports: [],
  templateUrl: './constructor.html',
  styleUrl: './constructor.css',
})
export class Constructor {
  username: string;
 constructor(){
  this.username = 'Javier';
 }
}
