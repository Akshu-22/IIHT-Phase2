import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DbService } from './shared/DbService';
import { ProductAddComponent } from './products/product-add.component';
import { RepeatPipe } from './repeat.pipe';
import { EmojiDirective } from './emoji.directive';
import { CommonModule } from '@angular/common';
import { TrusteeComponent } from './trustee/trustee.component';
import { BookDataComponent } from './book/book-data.component';
import { HomeAddComponent } from './Home/home-add.component';
import { AnimalDetailsComponent } from './animalDetails/animal-details.component';
import { AnimalSuggestionsComponent } from './animal/animal-suggestions.component';
import { LoginTestComponent } from './LoginTestCase/login-test.component';
import { AnimalAddComponent } from './animal/animal-add.component';
import { ShellComponent } from './Home/shell.component';
import { MenuComponent } from './Home/menu.component';
import { LoginComponent } from './user/login.component';
import { FoodListComponent } from './food/food-list.component';
import { FoodAddComponent } from './food/food-add.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card/cardlist.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './app.effects';






@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
   // ProductsListComponent,
  // StarComponent,
    CartComponent,
    WelcomeComponent,
    PenthouseComponent,
    TransformDataPipe,
    EventListComponent,
    EventDetailsComponent,
    //ProductAddComponent,
    RepeatPipe,
    EmojiDirective,
    TrusteeComponent,
    BookDataComponent,
    HomeAddComponent,
    AnimalDetailsComponent,
    AnimalSuggestionsComponent,
    LoginTestComponent,
    AnimalAddComponent,
    ShellComponent,
    MenuComponent,
    LoginComponent,
   // FoodListComponent,
  //  FoodAddComponent,
    CardComponent,
    CardListComponent,
  
  
   
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
  
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(DbService)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
