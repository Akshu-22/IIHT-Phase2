import { Injectable } from "@angular/core";
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { IEvent } from "src/app/event/event";
import { IProduct,Category } from "src/app/products/product";

@Injectable({

    providedIn:'root'

})

export class DbService implements InMemoryDbService {

    createDb() {

       const events: IEvent[]=
       [{
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
            "id":202,
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

                const products: IProduct[]=[
                    {

                        id:111,
                        name:'T-shirt',
                        category:Category.cloths,
                        price:200,
                        rating:3.5,
                        image:'../../assets/images/tshirt.jpg'
                    
                       },
                      {
                    
                        id:112,
                        name:'Puma Shoes',
                        category:Category.footware,
                        price:2000,
                        rating:1.5,
                        image:'../../assets/images/shoes.jpg'
                    
                    },
                    {
                    
                      id:113,
                      name:'Jeans',
                      category:Category.cloths,
                      price:800,
                      rating:3.7,
                      image:'../../assets/images/jeans.jpg'
                    
                    },
                    {
                    
                      id:114,
                      name:'mobile',
                      category:Category.electronicDevice,
                      price:35000,
                      rating:4,
                      image:'../../assets/images/mobile.jpg'
                    
                    },
                    {
                    
                      id:115,
                      name:'laptop',
                      category:Category.electronicDevice,
                      price:56000,
                      rating:2.7,
                      image:'../../assets/images/laptop.jpg'
                    
                    }
                ]
                return {events,products};

            }    
        
        }               