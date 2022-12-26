import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventService } from 'shared/event.service';
import { IEvent } from './event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService:EventService){};
  events!:IEvent[];


  ngOnInit(): void {
    this.eventService.getEvents().subscribe((eve:IEvent[])=>{
      this.events=eve;   

});
  }

}
