import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/shared/food.service';
import { IFood,Categ } from './food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit{
  
  
  foods!:IFood[];
  filteredFood:IFood[]=[];
  fod!:IFood;
  selectedFood!:IFood | null;
  filterValue!:string;
  constructor(private foodservice:FoodService,  private router:Router){};
  @Output() OnFoodSelection:EventEmitter<IFood>=new EventEmitter<IFood>();

  ngOnInit(): void {
    this.foodservice.getFood().subscribe((fod:IFood[])=>{
      this.foods=fod;
     this.filteredFood = this.foods;
    });
    
    this.foodservice.selectedFoodChanges$.subscribe(currentFood=>this.selectedFood=currentFood);
    console.log(this.selectedFood);
  }
  onSelect(p:IFood){
    this.OnFoodSelection.emit(p);
   }

  filterData(val:string){
    this.filteredFood=this.foods.filter((p)=>p.category===val);
  }
  newFood():void{
    console.log('in new food');  
    this.foodservice.changeSelectedFood(this.foodservice.newFood());
    console.log('back to newFood from service ');  
  }

  foodSelected(f1:IFood){
    this.foodservice.changeSelectedFood(f1);
   }
   getFoodById(id:number):IFood{
    this.foodservice.getFoodById(id).subscribe(resp=>this.fod=resp);
    return this.fod;
  }

  deleteFood(fod:IFood |null):void{
    if(fod && fod.id){
      if(confirm(`Are you sure you want to delete ${fod.name} details`)){
        this.foodservice.deleteFood(fod.id).subscribe(
          resp=>this.foodservice.changeSelectedFood(null),
        );
      }
      else{
        
        this.foodservice.changeSelectedFood(null)
      }
     this.router.navigate(['food'])
    }
   
  }

}
