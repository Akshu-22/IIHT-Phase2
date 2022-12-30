import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PenthouseComponent } from './penthouse.component';

describe('PenthouseComponent', () => {
  let component: PenthouseComponent;
  let fixture: ComponentFixture<PenthouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenthouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display msg ',()=>{
    component.pageTitle='welcome to penthouse';
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    const h1 =rootEle.query(By.css('#msg'));
    const h1ele:HTMLElement= h1.nativeElement;
    expect(h1ele.textContent).toEqual('welcome to penthouse');

  })
});
