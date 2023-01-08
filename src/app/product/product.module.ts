import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../products/products-list.component';
import { ProductAddComponent } from '../products/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../state/product/product.effects';
import { productReducer } from '../state/product/product.reducer';
import { StarComponent } from '../star/star.component';


@NgModule({
  declarations: [ProductsListComponent,
    ProductAddComponent,StarComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
