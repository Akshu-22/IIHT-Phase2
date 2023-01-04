import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pageTitle:string='Online Food Order';
  
  get isLoggedIn():boolean{
    return this.authservice.isLoggedIn();
  }
  
  get userName():string{
  
  if(this.authservice.currentUser)
  return this.authservice.currentUser?.userName;
  
  return '';
  
  }
  constructor(private router:Router,private authservice:AuthService){}
  
  
    ngOnInit(): void {
    }
  
    logOut():void{
      this.authservice.logOut();
      this.router.navigate(['/welcome']);
    }
  }
    /*ngOnDestroy(): void {
      console.log('menu destroyed');}
  
  
      ngOnChanges():void{
       console.log('menu component changes');
      }
  
      ngDoCheck(){
        console.log('doCheck of menu');
      }
  
      ngAfterContentInit(){
  
        console.log('menu content init');
  
      }
      ngAfterContentChecked(){
        console.log('menu content checked');
      }
      ngAfterViewInit(){
        console.log('menu view init');
  
      }
  
     ngAfterViewChecked(){
      console.log('menu view checked');
  
     }*/


