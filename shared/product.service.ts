import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {IProduct,Category} from "src/app/products/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ProductService{

  url="api/products.json";

constructor(private http:HttpClient){}

getProducts():Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.url);

}

}
/*
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
