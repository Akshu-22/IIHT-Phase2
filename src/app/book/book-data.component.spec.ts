import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { BookDataComponent } from './book-data.component';

describe('BookDataComponent', () => {
  let component: BookDataComponent;
  let fixture: ComponentFixture<BookDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
      declarations: [ BookDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check id', () => {
    const e1 =fixture.debugElement.query(By.css('#id'));
    expect(e1).toBeTruthy();
  });
  it('should have type number for id', () => {
    const e1 =fixture.debugElement.query(By.css('#id'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });
  it('should check id input is entered', () => {

    let id=component.bookForm.controls['id'];
    id.setValue('1');
    expect(id.errors).toBeNull();
    
  });
  it('should check book Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });
  
  it('should have type text for book name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should check book name is entered', () => {

    let book=component.bookForm.controls['name'];
    book.setValue('DataBase');
    expect(book.errors).toBeNull();
    
  });
  it('should check publish date', () => {
    const e1 =fixture.debugElement.query(By.css('#issueDate'));
    expect(e1).toBeTruthy();
  });
  it('should have type date for publish date', () => {
    const e1 =fixture.debugElement.query(By.css('#issueDate'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('date');
  });
  it('should check publish date is entered', () => {

    let date=component.bookForm.controls['issueDate'];
    date.setValue('2023-01-05');
    expect(date.errors).toBeNull();
    
  });
  it('should check author name', () => {
    const e1 =fixture.debugElement.query(By.css('#authorname'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for author name', () => {
    const e1 =fixture.debugElement.query(By.css('#authorname'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text'); 
    const author=component.bookForm.get('author');
    const auth=component.bookForm.get('author')?.get('authorname');
    auth?.setValue('james');
    fixture.detectChanges();
    expect(auth?.errors).toBeNull();
  });
 
  it('should check author email', () => {
    const e1 =fixture.debugElement.query(By.css('#authoremail'));
    expect(e1).toBeTruthy();
  });
  it('should have type email for author email', () => {
    const e1 =fixture.debugElement.query(By.css('#authoremail'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('email');
  });
  it('should check author email is entered', () => {

    let book=component.bookForm.controls['authoremail'];
    book.setValue('James@gmail.com');
    expect(book.errors).toBeNull();
    
  });
  it('should check publisher email', () => {
    const e1 =fixture.debugElement.query(By.css('#publisherEmail'));
    expect(e1).toBeTruthy();
  });
  
});
