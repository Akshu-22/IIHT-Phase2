import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class country{
  id:string='';
  name:string='';

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
export class Trustee{
  id!:number;
  name!:string;
  gender!:string;
  country!:string;
  pass!:string;
  Isudate!:string;
  dep!:number;
}

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})
export class TrusteeComponent implements OnInit {

  @ViewChild('truForm',{})truForm!:NgForm;

  countries:country[]=[
    new country("1","India"),
    new country("2","US"),
    new country("3","korea"),
    new country("4","Africa")
  ];
  

  constructor(){}
  tru!:Trustee

  ngOnInit(): void {
    this.tru={
      id:101,
      name:'Akshata',
      gender:'female',
      country:'',
      pass:'WX2897654',
      Isudate:'2022-12-29',
      dep:3

    };
    setTimeout(()=>{
      this.truForm.setValue(this.tru);
    });
    
  }

  onSubmit(truForm:any){
    console.log(truForm.value)
   }
   changeCountry(){
    this.truForm.controls['country'].setValue("2");
   }

}
