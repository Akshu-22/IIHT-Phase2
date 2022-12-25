import { Component } from '@angular/core';
import { IProduct } from './products/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  products:IProduct[]=[];

  onProductSelection(obj:IProduct){
    console.log(JSON.stringify(obj));
    this.products=[...this.products,obj];

}


}
