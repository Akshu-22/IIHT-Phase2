import { Component, Input, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges{

  @Input() products:IProduct[]=[];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in onchanges')
  this.products.forEach((e)=>console.log(e.name));


  }

  ngOnInit(): void {
    
  }

  


}
