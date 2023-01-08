import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoodAddComponent } from "../food/food-add.component";


const foodsRoutes: Routes = [
    { path: 'addFood', component: FoodAddComponent }
  ];
  
  @NgModule({
    imports: [
  
      RouterModule.forChild(foodsRoutes),],
    exports:[RouterModule]})
  export class FoodRoutingModule{

  }
  