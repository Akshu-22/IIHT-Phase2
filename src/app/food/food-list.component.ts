import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../state/food/food.state';
import { getCurrentFood, getError, getFood} from '../state/food/food.selectors';
import { FoodService } from 'src/app/shared/food.service';
import { IFood,Categ } from './food';
import * as FoodActions  from 'src/app/state/food/food.actions';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit{
  
  
  //foods!:IFood[];
  filteredFood:IFood[]=[];
  fod!:IFood;
  selectedFood!:IFood | null;
  filterValue!:string;
  foods:IFood[]=[];
  href:string='';

  constructor(private foodservice:FoodService,private store:Store<State>,  private router:Router){};
  
  // Observables---
food$!:Observable<IFood[]>;
selectedFood$!:Observable<any>;
errorMessage$!: Observable<string>;
//
dataReceived=this.foodservice.getFood();
obsFood$!:Observable<IFood[]>;
//

  @Output() OnFoodSelection:EventEmitter<IFood>=new EventEmitter<IFood>();

  ngOnInit(): void {
   /* this.foodservice.getFood().subscribe((fod:IFood[])=>{
      this.food=fod;
     this.filteredFood = this.food;
    });
    
    this.foodservice.selectedFoodChanges$.subscribe(currentFood=>this.selectedFood=currentFood);
    console.log(this.selectedFood); */
    this.href=this.router.url;
    this.food$ = this.store.select(getFood);
    this.food$.subscribe(resp=>this.filteredFood=resp);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(FoodActions.loadFood());
    this.selectedFood$ = this.store.select(getCurrentFood);

  }
  onSelect(p:IFood){
    this.OnFoodSelection.emit(p);
   }

  filterData(val:string):void{
    this.filteredFood=this.foods.filter((p)=>p.category===val);
  }
  newFood():void{
    console.log('in new food');  
   // this.foodservice.changeSelectedFood(this.foodservice.newFood());
    //console.log('back to newFood from service ');  
    this.store.dispatch(FoodActions.initializeCurrentFood());
    this.router.navigate([this.href,'addFood']);
  }

  foodSelected(f1:IFood){
    //this.foodservice.changeSelectedFood(f1);
    this.store.dispatch(FoodActions.setCurrentFood({currentFoodId:f1.id}));
   }
   getFoodById(id:number):IFood{
    this.foodservice.getFoodById(id).subscribe(resp=>this.fod=resp);
    return this.fod;
  }

  deleteFood(fod:IFood):void{
    if(fod && fod.id){
      if(confirm(`Are you sure you want to delete ${fod.name} details`)){

        this.store.dispatch(FoodActions.deleteFood({ foodId: fod.id }));
       // this.foodservice.deleteFood(fod.id).subscribe(
         // resp=>this.foodservice.changeSelectedFood(null),
       // );
      }
      else{
        this.store.dispatch(FoodActions.clearCurrentFood());
        //this.foodservice.changeSelectedFood(null)
      }
    
    }
    this.router.navigate(['food'])
  }

}
