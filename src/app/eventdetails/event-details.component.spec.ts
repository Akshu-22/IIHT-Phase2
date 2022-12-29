import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponent } from './event-details.component';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let element:HTMLElement;
  let fixture: ComponentFixture<EventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the @Input  array', () => {
       component.events=[{
        "id":100,
        "name":"Art Exhibition",
        "date":"10-Nov-2022",
        "time":"1.00 PM",
        "price":2000,
        "imageUrl":"../assets/images/art.jpg",
        "location":{
            "address":"akurdi",
            "city":"pune",
            "country":"india"
        },
        "sessions":{
            "id":201,
            "name":"jay",
            "presenter":"sam",
            "duration":"2Hours",
            "level":"1st",
            "voters":["akshata","manali","jayesh","snehal"]
    
        }
        
    
    },
    {
    "id":101,
        "name":"Science Exhibition",
        "date":"15-Dec-2022",
        "time":"2.00 PM",
        "price":1000,
        "imageUrl":"../assets/images/science.jpg",
        "location":{
            "address":"akurdi",
            "city":"pune",
            "country":"india"
        },
        "sessions":{
            "id":201,
            "name":"jay",
            "presenter":"sam",
            "duration":"2Hours",
            "level":"1st",
            "voters":["akshata","manali","jayesh","snehal"]
    
        }
    },
    {
        "id":102,
            "name":"career counselling",
            "date":"18-Jan-2023",
            "time":"11.00 AM",
            "price":3000,
            "imageUrl":"../assets/images/coun.jpg",
            "location":{
                "address":"akurdi",
                "city":"pune",
                "country":"india"
            },
            "sessions":{
                "id":201,
                "name":"jay",
                "presenter":"sam",
                "duration":"2Hours",
                "level":"1st",
                "voters":["akshata","manali","jayesh","snehal"]
        
            }
        },
        {
            "id":103,
                "name":"Marketing Lectures",
                "date":"23-Feb-2023",
                "time":"3.00 PM",
                "price":5000,
                "imageUrl":"../assets/images/mark.jpg",
                "location":{
                    "address":"akurdi",
                    "city":"pune",
                    "country":"india"
                },
                "sessions":{
                    "id":201,
                    "name":"jay",
                    "presenter":"sam",
                    "duration":"2Hours",
                    "level":"1st",
                    "voters":["akshata","manali","jayesh","snehal"]
            
                }
            },
            {
                "id":104,
                    "name":"Personal Development",
                    "date":"09-Mar-2023",
                    "time":"10.00 AM",
                    "price":12000,
                    "imageUrl":"../assets/images/personal.jpg",
                    "location":{
                        "address":"akurdi",
                        "city":"pune",
                        "country":"india"
                    },
                    "sessions":{
                        "id":201,
                        "name":"jay",
                        "presenter":"sam",
                        "duration":"2Hours",
                        "level":"1st",
                        "voters":["akshata","manali","jayesh","snehal"]
                
                    }
                }]

                let event1=component.events;
                fixture.detectChanges();
                let val=fixture.debugElement.nativeElement;
                val =val.querySelector('#data').innerText;
                expect(JSON.parse(val)).toEqual(JSON.parse(JSON.stringify(event1)));

  });
  it('should render@Input message correctly', () => {
    let msg = " new message from parent";
    component.message=msg;
     fixture.detectChanges();
    let value =element.querySelector('#msgD')?.textContent;
    expect(value).toEqual(msg);
  })

  
});
