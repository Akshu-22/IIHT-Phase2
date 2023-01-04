import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit/* ,OnChanges,OnDestroy*/ {
 
  ngOnInit(): void {
    
  }

 /* constructor() { console.log('Shell constructor');}
  ngOnDestroy(): void {
  console.log('shell destroyed');}

  ngOnInit(): void {
    console.log('in oninit');
  }
  ngOnChanges():void{
   console.log('shell component changes');
  }

  ngDoCheck(){
    console.log('doCheck of Shell');
  }

  ngAfterContentInit(){

    console.log('Shell content init');

  }
  ngAfterContentChecked(){
    console.log('shell content checked');
  }
  ngAfterViewInit(){
    console.log('shell view init');

  }

 ngAfterViewChecked(){
  console.log('shell view checked');

 }*/

}
