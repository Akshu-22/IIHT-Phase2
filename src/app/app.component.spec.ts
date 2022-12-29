import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display msg ',()=>{
    component.name='akshata';
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    const h1 =rootEle.query(By.css('#nm'));
    const h1ele:HTMLElement= h1.nativeElement;
    expect(h1ele.textContent).toEqual('akshata');

  })
});
