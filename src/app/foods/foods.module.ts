import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from '../food/food-list.component';
import { FoodAddComponent } from '../food/food-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodRoutingModule } from './foods.routing.module';



@NgModule({
  declarations: [FoodListComponent,FoodAddComponent,],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,FoodRoutingModule,
  ]
})
export class FoodsModule { }
