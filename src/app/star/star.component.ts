import { Component, Input, OnChanges, OnInit, SimpleChanges,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating:number=0;
  cropwidth:number=75;

  @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>();

  constructor(){}

  ngOnChanges(changes:SimpleChanges):void{
    this.cropwidth = this.rating *75/5;

  }

  ngOnInit(): void {
    
  }
  onClick():void{

    this.ratingClicked.emit(` ${this.rating} `);
  /* let msg =  document.querySelector('#s1')?.textContent ?? 'hello there';
    this.ratingClicked.emit(msg);*/
  }

}
