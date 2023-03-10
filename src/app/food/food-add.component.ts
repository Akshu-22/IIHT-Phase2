import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription,tap } from 'rxjs';
import { FoodService } from 'src/app/shared/food.service';
import { GenericValidator } from 'src/app/shared/genericvalidator';
import { State } from '../state/food/food.state';
import { Categ, IFood } from './food';
import * as FoodActions  from '../state/food/food.actions';
import { getCurrentFood } from '../state/food/food.selectors';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit,OnDestroy {
  pageTitle='Edit Product';
  errorMessage='';
 // foods!:IFood | null;
 foods!:IFood | null | undefined;
  sub!:Subscription;
  addFood!: FormGroup;
  displayMessage: {[key:string]:string}={};
  food$!: Observable<IFood | null | undefined  >;
    private validationMessages!:{[key:string]:{[key:string]:string}};

    private genericValidator!:GenericValidator;
    
  constructor(private store:Store<State>,private formBuilder: FormBuilder,private router: Router, private foodservice:FoodService ) { 

  this.validationMessages={

    name:{
      required:'Food name is required ',
      minLength:'Food name must have 3 characters',
      maxLength:'Food name must have less than  equal to 10 chars'
    },
    category:{
      required:'Category is required'
    },
    price:{
      required:'Price is required'
    },image:{
      required:'Image is required'
    },rating:{
      required:'Rating is required'
    },

    };
    this.genericValidator=new GenericValidator(this.validationMessages);

 }
ngOnDestroy(): void {
 //this.sub.unsubscribe();
}

  ngOnInit() {
    this.addFood = this.formBuilder.group({
      id: ['',[Validators.required]],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      category:[Categ.indian,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]]  
    });
    //this.sub=this.foodservice.selectedFoodChanges$.subscribe(selFod=>this.displayProduct(selFod));
    this.food$ = this.store.select(getCurrentFood)
 .pipe(
  tap(currentFood => this.displayProduct(currentFood))
);
this.food$.subscribe(resp=>this.foods=resp);
console.log('selected current food in ng onit add food ',this.foods);

this.addFood.valueChanges.subscribe(
  () => this.displayMessage =
  this.genericValidator.processMessages(this.addFood)
  );
  console.log('value in form changes')
  

    this.addFood.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addFood))

  }
  get id(){
    return this.addFood.get("id");
  }

  get name(){
    return this.addFood.get("name");
    }

  get image(){
    return this.addFood.get("image");
    }
  get price(){
    return this.addFood.get("price");
      }
  get category(){
      return this.addFood.get("category");
        }

  displayProduct(foodParam:IFood |null |undefined):void{

    this.foods = foodParam;
    if(this.foods){
 
     this.addFood.reset();
 
     if(this.foods.id==0){
       this.pageTitle='Add Product';
     }
     else{
 
       this.pageTitle=`Edit Food item: ${this.foods.name}`;
 
     }
  
  this.addFood.patchValue({
   id:this.foods.id,
    name:this.foods.name,
    image:this.foods.image,
    price:this.foods.price,
    category:this.foods.category
  }) 
    } 
  }
 
   saveFood(originalFood:IFood | null |undefined):void{
 
     if(this.addFood.valid){
       if(this.addFood.dirty){
         const food={...originalFood,...this.addFood.value};
 
       if(food.id==0){
        this.store.dispatch(FoodActions.createFood({food}));
        /* this.foodservice.createFood(foods).subscribe(
           (resp)=>{
             this.foodservice.changeSelectedFood(resp);
             console.log(resp);},
 
           (err)=>this.errorMessage=err
         );*/
 
      }
      else{
        this.store.dispatch(FoodActions.updateFood({ food}));
 
       /*this.foodservice.updateFood(food).subscribe(
        resp=>this.foodservice.changeSelectedFood(resp),
        err=>this.errorMessage=err      ); */
      }
       }
        
     } 
     this.router.navigate(['food'])       
   }
   blur():void{
   this.displayMessage=this.genericValidator.processMessages(this.addFood); 
   } 
}
