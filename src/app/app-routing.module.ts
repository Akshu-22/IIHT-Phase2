import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './eventdetails/event-details.component';
import { ProductAddComponent } from './products/product-add.component';
import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { HomeAddComponent } from './Home/home-add.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookDataComponent } from './book/book-data.component';
import { AnimalListComponent } from './animal/animal-list.component';
import { AnimalDetailsComponent } from './animalDetails/animal-details.component';
import { AnimalSuggestionsComponent } from './animal/animal-suggestions.component';
import { ProductsListComponent } from './products/products-list.component';
import { AuthGuard } from './user/auth-guard.service';
import { ShellComponent } from './Home/shell.component';
import { LoginComponent } from './user/login.component';


/*const routes: Routes = [
  {path:'events/:id',component:EventDetailsComponent},
  
  {path:'',pathMatch:'full' ,component:HomeAddComponent},
  {path:'penthouse',component:PenthouseComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'book',component:BookDataComponent},

  {path:'animal',component:AnimalListComponent,
  children:[{path:'detail/:id',component:AnimalDetailsComponent},
  {path:'sugg',component:AnimalSuggestionsComponent}]},
  {path:'animal/:id',component:AnimalDetailsComponent},
 
 {path:'product',component:ProductsListComponent,
    children:[{path:'addProduct',component:ProductAddComponent}]}

    {path:'product',component:ProductsListComponent,
  children:[ {path:'addProduct',component:ProductAddComponent}]},
   
]*/
const routes:Routes=[
  {path:'',component:ShellComponent,
  children:[{path:'welcome',component:WelcomeComponent},

{
  path:'products',
  component:ProductsListComponent,
  canActivate:[AuthGuard],
  children:[{path:'addProduct',component:ProductAddComponent}]
},
{path:'',redirectTo:'welcome',pathMatch:'full'},
{path:'login',component:LoginComponent}

]}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
