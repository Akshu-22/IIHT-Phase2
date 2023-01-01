
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginTestComponent } from './login-test.component';

describe('LoginTestComponent', () => {
  let component: LoginTestComponent;
  let fixture: ComponentFixture<LoginTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
      declarations: [ LoginTestComponent ]
    
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check UserEmail is correct', () => {

    let email=component.loginForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
    
  });

  
  it('should check password is Valid', () => {

    let pwd=component.loginForm.controls['pass'];
    pwd.setValue('abcd1234');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
    
  });

  it('should check form is valid or not if no values entered', () => {
   // expect(component.loginForm.valid).toBeTruthy();
   expect(component.loginForm.valid).toBeFalsy();
  });

  it('should check form is valid or not when values are entered', () => {
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['pass'].setValue('abcd1234');
    expect(component.loginForm.valid).toBeTruthy();  
   });

   it('should check form is submitted', () => {
    expect(component.loginForm.invalid).toBeTruthy();
    let btn=fixture.debugElement.query(By.css('#btn')) ;
    expect(btn.nativeElement.disabled).toBeTruthy();
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['pass'].setValue('abcd1234');
    fixture.detectChanges();
    expect(btn.nativeElement.disabled).toBeFalsy();
    
   })

  

 
});
