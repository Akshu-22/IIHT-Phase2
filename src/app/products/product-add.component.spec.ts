import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
      declarations: [ ProductAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Product Name--
  it('should check Product Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });
  it('should have ProductName type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as ProductName', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('name');
  });
  it('should check ProductName input value is correct', () => {
    let name=component.addProduct.controls['name'];
    name.setValue('AkshataUttamPatil');
    expect(name.errors).toBeNull();    
  });

//Product Price
  it('should check Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1).toBeTruthy();
  });
  it('should have Price type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });
  it('should have name as Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('price');
  });
  it('should check Price input value is correct', () => {
    let price=component.addProduct.controls['price'];
    price.setValue('1000');
    expect(price.errors).toBeNull();    
  });


  //Image--
  it('should check Image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1).toBeTruthy();
  });
  it('should have Image type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('image');
  });
  it('should check image input value is correct', () => {
    let image=component.addProduct.controls['image'];
    image.setValue('../../assets/images/jeans.jpg');
    expect(image.errors).toBeNull();    
  });

  //Rating--
  it('should check Rating', () => {
    const e1 =fixture.debugElement.query(By.css('#rating'));
    expect(e1).toBeTruthy();
  });
  it('should have Rating type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#rating'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });
  it('should have name as rating', () => {
    const e1 =fixture.debugElement.query(By.css('#rating'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('rating');
  });
  it('should check rating input value is correct', () => {
    let rating=component.addProduct.controls['rating'];
    rating.setValue('7');
    expect(rating.errors).toBeNull();    
  });

  //Select check
  it('should check select',()=>{
    const e1 =fixture.debugElement.query(By.css('#sel')).nativeElement;
    let select=component.addProduct.controls['category'];
    select.setValue('footware');
    expect(select.errors).toBeNull(); 
    e1.value=e1.options[2].value;
    fixture.detectChanges();
    let val=e1.options[e1.selectedIndex].label;
    expect(val).toEqual('electronicDevice');
  })


  //Button Disable
  it('should check addProduct button disabled', () => {
    fixture.detectChanges();
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    expect(btn.disabled).toBe(true );
   })
   it('should check addProduct button enable', () => {
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    component.addProduct.controls['id'].setValue('101');
    component.addProduct.controls['name'].setValue('jeans');
    component.addProduct.controls['price'].setValue('200');
    component.addProduct.controls['image'].setValue('../../assets/images/jeans.jpg');
    component.addProduct.controls['category'].setValue('cloths');
    component.addProduct.controls['rating'].setValue('4');
  
    fixture.detectChanges();
    expect(btn.disabled).toBe(true );
   })


});
