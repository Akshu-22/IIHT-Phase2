import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  bookForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
  
    this.bookForm=this.formBuilder.group({

         id:['1',[Validators.required,Validators.max(10)]],
         name:['Java',[Validators.required,Validators.minLength(4)]],
         issueDate:['2022-12-23',[Validators.required]],
  
         author:this.formBuilder.group({

          authorname:['James',[Validators.required]],
          authoremail:['james@gmail.com',[Validators.required,Validators.email]]
        
         }),
         publishers:this.formBuilder.array([])
    })
  }

  get id(){
    return this.bookForm.get("id");
  }

  get name(){
    return this.bookForm.get("name");
  }
  get issueDate(){
    return this.bookForm.get("issueDate");
  }
  get authorname(){
    return this.bookForm.get("author")?.get("authorname");

  }

  get authoremail(){
     return this.bookForm.get("author")?.get("authoremail");
  }
  get publishers():FormArray{
    return this.bookForm.get("publishers") as FormArray;
  }
  newPublisher():FormGroup{
    return this.formBuilder.group({
         publisherName:'',
         publisherEmail:'',
    })

  }

  addPublisher(){
    this.publishers.push(this.newPublisher());
  }
  removePublisher(i:number){
    this.publishers.removeAt(i);
  }
 
 
  ngOnInit(): void {   
  }
  reset(bookForm:any) {
    bookForm.resetForm();
  }
 
  onSubmit(){
    console.log(this.bookForm.value);
  }

}
