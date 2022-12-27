import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './eventdetails/event-details.component';
import { ProductAddComponent } from './products/product-add.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'events/:id',component:EventDetailsComponent},
  {path:'addProduct',component:ProductAddComponent},
  {path:'',pathMatch:'full' ,component:AppComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
