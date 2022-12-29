import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should check whether @Output is correctly emitting `,()=>{
        spyOn(component.ratingClicked,'emit');
        const div =fixture.nativeElement.querySelector('.crop');
        fixture.nativeElement.querySelector('#s1').textContent=
        'hello there';
        let msg = fixture.nativeElement.querySelector('#s1').textContent;
        fixture.detectChanges();
        div.click();
        fixture.detectChanges();
        expect(component.ratingClicked.emit).toHaveBeenCalledWith(msg);

  })
});
