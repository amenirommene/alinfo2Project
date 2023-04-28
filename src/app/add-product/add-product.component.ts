import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService) { }
  p: Product= new Product();
  ngOnInit(): void {
  }
  add(){
    this.ps.addProduct(this.p).subscribe();
    this.p=new Product();
    }
}
