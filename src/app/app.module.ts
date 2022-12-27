import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/animal-list.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { TransformDataPipe } from './transform-data.pipe';
import {  HttpClientModule } from "@angular/common/http";
import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './eventdetails/event-details.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from '../../shared/DbService';
import { ProductAddComponent } from './products/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    ProductsListComponent,
    StarComponent,
    CartComponent,
    WelcomeComponent,
    PenthouseComponent,
    TransformDataPipe,
    EventListComponent,
    EventDetailsComponent,
    ProductAddComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DbService)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
