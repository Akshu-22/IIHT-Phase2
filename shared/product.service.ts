import { Injectable } from "@angular/core";
import { Observable,BehaviorSubject,catchError,tap,throwError } from "rxjs";
import {IProduct,Category} from "src/app/products/product";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ProductService{

 /* url="api/products.json";*/
 url="api/products";
 products:IProduct[]=[];

 private selectedProductSource= new BehaviorSubject<IProduct | null >(null);

 selectedProductChanges$=this.selectedProductSource.asObservable();


constructor(private http:HttpClient){}

getProducts():Observable<IProduct[]>{  
  return this.http.get<IProduct[]>(this.url).pipe(
      tap(data=>{console.log(data);        
        this.products=data;
  }),
      catchError(this.errorHandler)
  );
}
changeSelectedProduct(selectedProduct:IProduct | null):void{

  this.selectedProductSource.next(selectedProduct);
  console.log(selectedProduct);

}
  errorHandler=(err:any)=>{
   let errorMessage:string;
   if(err.error instanceof ErrorEvent)
     {
       errorMessage = `An error has occured ${err.error.message}`
     }
     else{
      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
     }
     console.log(err);
     return throwError(errorMessage);
  }

  newProduct():IProduct{
      return {
  
           id:0,
          name:'',
          category:Category.cloths,
          price:0,
          image:'',
          rating:0,
        
  
      };
  
    }

    createProduct(product:IProduct):Observable<IProduct>{
      
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
       const newProduct={...product,id:null};

       return     this.http.post<IProduct>(this.url,newProduct,{headers})
       .pipe(
         tap(data=>{
 
          console.log('in create new product'+ JSON.stringify(data));
          
          this.products.push(data);
 
         },
         catchError(this.errorHandler)
         )
       )
   }
  

}
/*
getProducts():Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.url);

}
getProducts():IProduct[]{
    return[{

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
    
    }
        
    ]
}*/
