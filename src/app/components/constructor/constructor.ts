import { Component } from '@angular/core';
import Product from '../../models/Product';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-constructor',
  imports: [NgClass],
  templateUrl: './constructor.html',
  styleUrl: './constructor.css',
})
export class Constructor {
  product: Product;
  username: string;
  isDark: boolean = true;

  toogleDark(){
    this.isDark = !this.isDark;
  }

 constructor(){
  this.username = 'Javier';
  this.product = {
    name: "Computer",
    price: 1000,
    isForSale: true
  }
}
}
