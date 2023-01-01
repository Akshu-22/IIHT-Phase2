import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit{

  loginForm:FormGroup;
  msg:string='';

  constructor(private formBuilder:FormBuilder) {
  
    this.loginForm=this.formBuilder.group({

        
         email:['',[Validators.required,Validators.email]],
         pass:['',[Validators.required,Validators.minLength(8)]]
    })
  }
 
  get email(){
    return this.loginForm.get("email");
  }
  get pass(){
    return this.loginForm.get("pass");
  }
  

  ngOnInit(){
  
  }
  onSubmit(){

    if(this.loginForm.valid){
      this.msg="submitted Successfully";
    }
   
   
  }

}
