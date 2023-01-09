import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from '../food/food-list.component';
import { FoodAddComponent } from '../food/food-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodRoutingModule } from './foods.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { foodReducer } from '../state/food/food.reducer';
import { FoodEffects } from '../state/food/food.effects';



@NgModule({
  declarations: [FoodListComponent,FoodAddComponent,],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,FoodRoutingModule,

    StoreModule.forFeature('foods',foodReducer),
    EffectsModule.forFeature(FoodEffects)
  ]
})
export class FoodsModule { }
