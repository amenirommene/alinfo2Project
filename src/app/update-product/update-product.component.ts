import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
   p:Product=new Product();
  constructor(private ac:ActivatedRoute, 
    private productService: ProductService, private _router:Router) { }
    update(){
this.productService.putProduct(this.p).subscribe(res=>this._router.navigateByUrl("/products"));
}
  ngOnInit(): void {
    /*let id=this.ac.snapshot.params['monid'];
    this.productService.getProductById(id).subscribe(res=> this.p = res );*/
    let id;
    this.ac.paramMap.subscribe
    (res=>this.productService.
      getProductById(res.get('monid'))
    .subscribe(res=> {this.p = res}));
    
  }

}
