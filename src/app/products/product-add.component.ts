import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription ,tap} from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';
import { Category, IProduct } from './product';
import { GenericValidator } from 'src/app/shared/genericvalidator';
import { State } from '../state/product/product.state';
import { Store } from '@ngrx/store';
import { getCurrentProduct } from '../state/product/product.selectors';
import * as ProductActions  from '../state/product/product.actions';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent  implements OnInit,OnDestroy{
  pageTitle='Edit Product';
  errorMessage='';
  //products!:IProduct | null;
 //products:IProduct[]=[];
 product!:IProduct | null | undefined;
  sub!:Subscription;
  addProduct!: FormGroup;
  displayMessage: {[key:string]:string}={};
  product$!: Observable<IProduct | null | undefined  >;

  private validationMessages!:{[key:string]:{[key:string]:string}};

  private genericValidator!:GenericValidator;
    
  constructor(private store:Store<State>,private formBuilder: FormBuilder,private router: Router, private productservice:ProductService ) { 

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
  //this.sub.unsubscribe();
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
    //
    console.log('created add form ')
        this.product$ = this.store.select(getCurrentProduct)
          .pipe(
            tap(currentProduct => this.displayProduct(currentProduct))
          );

    this.product$.subscribe(resp=>this.product=resp);
    console.log('selected current product in ng onit add product ',this.product);

      this.addProduct.valueChanges.subscribe(() => this.displayMessage =this.genericValidator.processMessages(this.addProduct) );
    console.log('value in form changes')
   //
   
   
   // this.sub=this.productservice.selectedProductChanges$.subscribe(selProd=>this.displayProduct(selProd));


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

  //displayProduct(productParam:IProduct |null):void{

    displayProduct(productParam:IProduct |null |undefined):void{

    this.product = productParam;
    if(this.product){
 
     this.addProduct.reset();
 
     if(this.product.id==0){
       this.pageTitle='Add Product';
     }
     else{
 
       this.pageTitle=`Edit Product: ${this.product.name}`;
 
     }
  
  this.addProduct.patchValue({
   id:this.product.id,
    name:this.product.name,
    image:this.product.image,
    rating:this.product.rating,
    price:this.product.price,
    category:this.product.category
  }) 
    }
 
   }
 
   saveProduct(originalProduct:IProduct | null |undefined):void{
 
     if(this.addProduct.valid){
       if(this.addProduct.dirty){
         const product={...originalProduct,...this.addProduct.value};
 
       if(product.id==0){
        this.store.dispatch(ProductActions.createProduct({product}));
       /*  this.productservice.createProduct(products).subscribe(
           (resp)=>{
             this.productservice.changeSelectedProduct(resp);
             console.log(resp);},
 
           (err)=>this.errorMessage=err
         );*/
 
      }
      else{
      /* this.productservice.updateProduct(products).subscribe(
        resp=>this.productservice.changeSelectedProduct(resp),
        err=>this.errorMessage=err      );*/
        this.store.dispatch(ProductActions.updateProduct({ product}));
 
      }
       }
      
       
     }
     this.router.navigate(['products'])
   }
 
   blur():void{
   this.displayMessage=this.genericValidator.processMessages(this.addProduct);
 
   }
 
   deleteProduct(prod:IProduct |null |undefined):void{
     if(prod && prod.id){
 
       if(confirm(`Are you sure you want to delete ${prod.name} details`)){
       // this.store.dispatch(ProductActions.deleteProduct({ productId: prod.id }));
        this.store.dispatch(ProductActions.deleteProduct({ productId: prod.id }));  //using ngrx
 
        // this.productservice.deleteProduct(prod.id).subscribe(
         //  resp=>this.productservice.changeSelectedProduct(null),
          // err=>this.errorMessage=err
        // );
       }
       else{

       // this.store.dispatch(ProductActions.clearCurrentProduct());
        this.store.dispatch(ProductActions.clearCurrentProduct()); //using ngrx
         
        // this.productservice.changeSelectedProduct(null)
       }
      
     }
     this.router.navigate(['products'])
   }

}

