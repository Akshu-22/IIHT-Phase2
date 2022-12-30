import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal, AnimalService } from '../animal/animals';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  id:number=0;
  ani :Animal | undefined;
  sub!:Subscription
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private details:AnimalService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params);
      let idd=params.get('id');
       if(idd){
         this.id=+idd;
       }

      if(this.details.getAnimalById(this.id)){
            this.ani = this.details.getAnimalById(this.id);
      }
    })

 }
 back():void{
   this.router.navigate(['animal']);
    
  }

}
