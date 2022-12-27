export interface IEvent{

    id:number;
    name:string;  
    date:string;
    time:string;
    price:number;
    imageUrl:string;
    location:{
        address:string;
        city:string;
        country:string;
    },   
    sessions:{
        id:number;
        name:string;
        presenter:string;
        duration:string;
        level:string;
        voters:string[];
    }
    


}