import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSuggestionsComponent } from './animal-suggestions.component';

describe('AnimalSuggestionsComponent', () => {
  let component: AnimalSuggestionsComponent;
  let fixture: ComponentFixture<AnimalSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
