import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "../products/product-add.component";


const routes: Routes = [
    {
      path: 'addProduct', component: ProductAddComponent }
  ];
  
  @NgModule({
    imports: [
  
      RouterModule.forChild(routes),],
    exports:[RouterModule]})
  export class ProductRoutingModule{
  
  }