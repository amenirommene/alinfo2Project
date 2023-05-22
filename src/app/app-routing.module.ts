import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  //une route
  {path: "home", component:HomeComponent},
  {path: "products", component:ProductsComponent, children:[
    {path: "details", component:DetailsComponent},
  ]},
    //route paramétrée
  {path: "product/:id/:title", component:ProductComponent},
  {path: "update/:monid", component:UpdateProductComponent},

  {path: "details", component:DetailsComponent},
  {path: "add/product", component:AddProductComponent},
  //"**" à placer à la dernière position
  //toutes les routes qui suivent "**" seront ignorés
  {path: "**", component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
