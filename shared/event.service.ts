import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {IEvent} from "src/app/event/event";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class EventService{

  url="api/events.json";

constructor(private http:HttpClient){}

getEvents():Observable<IEvent[]>{

    return this.http.get<IEvent[]>(this.url);

}
}