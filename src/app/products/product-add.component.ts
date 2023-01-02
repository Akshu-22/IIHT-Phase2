import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/product.service';
import { Category, IProduct } from './product';
import { GenericValidator } from 'shared/genericvalidator';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent  implements OnInit,OnDestroy{
  pageTitle='Edit Product';
  errorMessage='';
  products!:IProduct | null;
  sub!:Subscription;
  addProduct!: FormGroup;
  displayMessage: {[key:string]:string}={};
    private validationMessages!:{[key:string]:{[key:string]:string}};

    private genericValidator!:GenericValidator;
    
  constructor(private formBuilder: FormBuilder,private router: Router, private productservice:ProductService ) { 

  this.validationMessages={

    name:{
      required:'Product name is required ',
      minLength:'Product name must have 3 characters',
      maxLength:'Product name must have less than  equal to 10 chars'
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
  this.sub.unsubscribe();
}

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      id: [],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      category:[Category.cloths,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      rating:['',[Validators.required]]

    });
    this.sub=this.productservice.selectedProductChanges$.subscribe(selProd=>this.displayProduct(selProd));


    this.addProduct.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addProduct))

  }
  get id(){
    return this.addProduct.get("id");
  }

  get name(){
    return this.addProduct.get("name");
    }

  get image(){
    return this.addProduct.get("image");
    }
  get price(){
    return this.addProduct.get("price");
      }
  get category(){
      return this.addProduct.get("category");
        }
  get rating(){
      return this.addProduct.get("rating");
        }

 /* onSubmit() {
    this.productservice.createProduct(this.addProduct.value)
      .subscribe( data => {console.log(data);
        this.router.navigate(['product']);
      });
  }*/

  displayProduct(productParam:IProduct |null):void{

    this.products = productParam;
    if(this.products){
 
     this.addProduct.reset();
 
     if(this.products.id==0){
       this.pageTitle='Add Product';
     }
     else{
 
       this.pageTitle=`Edit Product: ${this.products.name}`;
 
     }
  
  this.addProduct.patchValue({
   id:this.products.id,
    name:this.products.name,
    image:this.products.image,
    rating:this.products.rating,
    price:this.products.price,
    category:this.products.category
 
 
  })
 
 
    }
 
   }
 
   saveProduct(originalProduct:IProduct | null):void{
 
     if(this.addProduct.valid){
       if(this.addProduct.dirty){
         const products={...originalProduct,...this.addProduct.value};
 
       if(products.id==0){
         this.productservice.createProduct(products).subscribe(
           (resp)=>{
             this.productservice.changeSelectedProduct(resp);
             console.log(resp);},
 
           (err)=>this.errorMessage=err
         );
 
      }
      else{
 
       this.productservice.updateProduct(products).subscribe(
        resp=>this.productservice.changeSelectedProduct(resp),
        err=>this.errorMessage=err      );
 
      }
       }
       this.router.navigate(['products'])
       
     }
    
   }
 
   blur():void{
   this.displayMessage=this.genericValidator.processMessages(this.addProduct);
 
   }
 
   deleteProduct(prod:IProduct |null):void{
     if(prod && prod.id){
 
       if(confirm(`Are you sure you want to delete ${prod.name} details`)){
 
         this.productservice.deleteProduct(prod.id).subscribe(
           resp=>this.productservice.changeSelectedProduct(null),
           err=>this.errorMessage=err
         );
       }
       else{
         
         this.productservice.changeSelectedProduct(null)
       }
      this.router.navigate(['products'])
     }
    
   }

}

