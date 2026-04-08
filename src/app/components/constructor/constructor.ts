import { Component } from '@angular/core';
import Product from '../../models/Product';

@Component({
  selector: 'app-constructor',
  imports: [],
  templateUrl: './constructor.html',
  styleUrl: './constructor.css',
})
export class Constructor {
  product: Product;
  username: string;

 constructor(){
  this.username = 'Javier';
  this.product = {
    name: "Computer",
    price: 1000,
    isForSale: true
  }
}
}
