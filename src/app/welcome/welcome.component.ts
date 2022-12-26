import { getLocaleWeekEndRange } from '@angular/common';
import { Component, ɵɵpureFunction1 } from '@angular/core';
import { LoggingService } from 'shared/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title:string = 'welcome';
  num:number=0;
  Char:string='';
  constructor(private loggingservice:LoggingService){};
  name:string='';
  pass:string='';
  msg:string='';
  logClicked(){
    this.msg=this.loggingservice.log(this.name,this.pass);
    console.log(this.msg);

  }
}



