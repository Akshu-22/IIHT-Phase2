import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { By } from '@angular/platform-browser';
import { EmojiDirective } from '../emoji.directive';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent, EmojiDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display msg ',()=>{
    component.title='welcome';
    component.num=10;
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    const h1 =rootEle.query(By.css('#msg'));
    const h1ele:HTMLElement= h1.nativeElement;
    expect(h1ele.textContent).toEqual('welcome');

  })
});
