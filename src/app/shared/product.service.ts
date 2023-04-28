import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModule } from '../customer/customer.module';
import { Product } from '../models/product';
//Décorateur : nous sommes dans un service
@Injectable({
  //1- scope : tous peuvent utiliser ce service
  //2- combien d'instance ? : 1 seul instance pour tous
  providedIn: 'root'
}
)
export class ProductService {
//utiliser le service HttpClient
  constructor(private _http:HttpClient) { }
//retourner une lise de produits
  getAllProducts():Observable<Product[]>{
   return this._http.get<Product[]>("http://localhost:3000/products");
  }

  addProduct(p:Product):Observable<Product>{
    return this._http.post<Product>("http://localhost:3000/products",p);
   }
}
