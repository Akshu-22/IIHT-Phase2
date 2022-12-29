import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'shared/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent  implements OnInit{

  constructor(private formBuilder: FormBuilder,private router: Router, private productservice:ProductService ) { }

  addProduct!: FormGroup;

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],

    });

  }

  onSubmit() {
    this.productservice.createProduct(this.addProduct.value)
      .subscribe( data => {console.log(data);
        this.router.navigate(['']);
      });
  }

}
