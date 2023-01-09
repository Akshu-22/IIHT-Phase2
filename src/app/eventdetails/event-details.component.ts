import { state, style, transition, trigger,animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/event/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  animations:[
    trigger('enlarge',[

      state('start',style({
       width:'150px' , height:'100px'
      })),

    state('end',style({
      height:'150px',width:'200px'
    })),
     //transition('start=>end',animate('1s linear')),
    transition('start=>end',[
      animate('1s 2s')
    ]),
    transition('end=>start',[
      animate('1s 2s')
    // ]),
    ]),
    ])]
})
export class EventDetailsComponent implements OnInit {

  @Input() events:IEvent[]=[];
  @Input() message:string='';

   //animation---
   isHovering:boolean= false;

   //----
   applyAnimation($event: any){
    this.isHovering=!this.isHovering;

 }
 currentState =['start','end'];

 clickAnimation(index:number){

  console.log(index);

  this.currentState[index] = this.currentState[index] === 'start' ? 'end' :'start';

 }

 
  ngOnInit(): void {
  
}

}
