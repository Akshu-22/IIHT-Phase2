import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pageTitle:string='Online Shopping';
  
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
