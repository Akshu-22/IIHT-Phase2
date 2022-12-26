import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { ProductService } from 'shared/product.service';
import { Category, IProduct } from './product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(private productservice:ProductService){};
  pageTitle:string="Product List Is: "
filteredProducts:IProduct[]=[];
products!:IProduct[];
filterValue!:string;
@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();

  ngOnInit(): void {
    
   this.productservice.getProducts().subscribe((prod:IProduct[])=>{
          this.products=prod;
          this.filteredProducts = this.products;

   });
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

   filterData(val:string){
    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }

  onRatingClicked(msg:string):void{
    this.pageTitle='The Product Rating is: ' +msg;
  }

  onSelect(p:IProduct){
    this.OnProductSelection.emit(p);
   }


}