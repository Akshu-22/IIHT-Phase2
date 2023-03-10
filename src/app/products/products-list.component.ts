import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Category, IProduct } from './product';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { getCurrentProduct, getError, getProducts } from '../state/product/product.selectors';
import {  Store } from '@ngrx/store';
import { State } from '../state/product/product.state';
import * as ProductActions  from 'src/app/state/product/product.actions';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  constructor(private productservice:ProductService,private store:Store<State>,  private router:Router){};
  pageTitle:string="Product List Is: "
filteredProducts:IProduct[]=[];
//products!:IProduct[];
products:IProduct[]=[];
prod!:IProduct;
selectedProduct!:IProduct | null;
filterValue!:string;
href:string='';

// Observables---
products$!:Observable<IProduct[]>;
selectedProduct$!:Observable<any>;
errorMessage$!: Observable<string>;
//
dataReceived=this.productservice.getProducts();
obsProducts$!:Observable<IProduct[]>;

@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();

  ngOnInit(): void {
   /* 
   this.productservice.getProducts().subscribe((prod:IProduct[])=>{
          this.products=prod;
          this.filteredProducts = this.products;

   });
   this.productservice.selectedProductChanges$.subscribe(currentProduct=>this.selectedProduct=currentProduct);
   console.log(this.selectedProduct);*/

   this.href=this.router.url;
   console.log(this.href);
   this.products$ = this.store.select(getProducts);
   this.products$.subscribe(resp=>this.filteredProducts=resp);
   this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(ProductActions.loadProducts());
    this.selectedProduct$ = this.store.select(getCurrentProduct);
  }
  

   filterData(val:string){
    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }

  onRatingClicked(msg:string):void{
    this.pageTitle='The Product Rating is: ' +msg;
  }

  onSelect(p:IProduct){
    this.OnProductSelection.emit(p);
   }
  /* newProduct(){

    this.productservice.changeSelectedProduct(this.productservice.newProduct());
    console.log(this.productservice.newProduct());
  }*/

  newProduct():void{
    console.log('in new product');
  
   // this.productservice.changeSelectedProduct(this.productservice.newProduct());
    //console.log('back to newProduct from service ');
    this.store.dispatch(ProductActions.initializeCurrentProduct());
    this.router.navigate([this.href,'addProduct']);
  
    // this.router.navigate(['addProduct']);
  }

   productSelected(prod:IProduct):void{
    /*console.log(prod);*/
    //this.productservice.changeSelectedProduct(prod);
    this.store.dispatch(ProductActions.setCurrentProduct({currentProductId:prod.id}));
   }
   getProductById(id:number):IProduct{
    this.productservice.getProductById(id).subscribe(resp=>this.prod=resp);
    return this.prod;
  }
}

  /* products:IProduct[]=this.productservice.getProducts();--1st type*/
    /*{

    id:111,
    name:'T-shirt',
    category:Category.cloths,
    price:200,
    rating:3.5,
    image:'../../assets/images/tshirt.jpg'

   },
  {

    id:112,
    name:'Puma Shoes',
    category:Category.footware,
    price:2000,
    rating:1.5,
    image:'../../assets/images/shoes.jpg'

},
{

  id:113,
  name:'Jeans',
  category:Category.cloths,
  price:800,
  rating:3.7,
  image:'../../assets/images/jeans.jpg'

},
{

  id:114,
  name:'mobile',
  category:Category.electronicDevice,
  price:35000,
  rating:4,
  image:'../../assets/images/mobile.jpg'

},
{

  id:115,
  name:'laptop',
  category:Category.electronicDevice,
  price:56000,
  rating:2.7,
  image:'../../assets/images/laptop.jpg'

}*/

