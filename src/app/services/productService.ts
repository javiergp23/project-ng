import { Injectable } from '@angular/core';
import Product from '../models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: Product

  constructor(){
    this.product = {
      name: "Computer",
      price: 1000,
      isForSale: true
    }
  }

  setProductName(name: string){
    this.product.name = name;
  }
}
