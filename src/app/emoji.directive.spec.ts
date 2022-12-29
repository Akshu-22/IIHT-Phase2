import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmojiDirective } from './emoji.directive';


@Component({
  template: `<div appEmoji>Test</div>`,
})
class HostComponent {}

@NgModule({
  declarations: [HostComponent, EmojiDirective],
  exports: [HostComponent],
})
class HostModule {}

describe('EmojiDirective', () => {
  let component: HostComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule],
      declarations:[EmojiDirective] 
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges(); 
  });

  it('should create a host instance', () => {
    expect(component).toBeTruthy();
  });

  it('should add emoji', () => {
    
    const el = element.querySelector('div')?.textContent;

    expect(el).toEqual('Test😊'); 
  });
  
});