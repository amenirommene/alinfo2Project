import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 // providers:[ProductService]
})
export class ProductsComponent implements OnInit {
  price : number = 1500;
  listProducts : Product[] ;
  //injecter le service ProductService
  constructor(private ps:ProductService) { }
//méthode qui fait partie du cycle de vie d'un composant
//se déclenche une fois le composant est crée
//méthode hook
//utile pour l'initialisation des proprités du composant
  ngOnInit(): void {
    //appeler la méthode getAllProducts() du service
  this.ps.getAllProducts().subscribe(res=>{this.listProducts=res; console.log(this.listProducts) });
 
/*this.listProducts=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
*/
}
  like(prod:Product){
   prod.like +=1;
  }
  like2(i:number){
    this.listProducts[i].like +=1;

  }

  buy(p:Product){
   p.quantity -=1;
  }
}
