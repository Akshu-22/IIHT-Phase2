import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit {
  el1: any;

  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.textContent += '😊';
    
  }


}
