import { Injectable } from "@angular/core";

export interface Animal{

    id:number;
    name:string;
    description:string;
    count:number;
    imageUrl:string;
   /* constructor (id:number,name:string, description:string, count:number){this.id=id;this.name=name;this.description=description;this.count=count;}*/
}

@Injectable({
    providedIn:'root'
})
export class AnimalService{

    public getAnimal(){

     let ani:Animal[];
    /* ani=[
        new Animal(1,'tiger','wild animal',20),
        new Animal(2,'dog','domastic animal',50),
        new Animal(3,'lion','wild animal',25)

    ]*/
    ani=[
        {
          id: 1,
          name: "tiger",
          description: "wild animal",
          count:10,
          imageUrl: "../../assets/images/tiger.jpg"
        },
        {
          id: 2,
          name: "dog",
          description: "domastic animal",
          count:3,
          imageUrl: "../../assets/images/dog.jpg"
        },
        {
          id: 3,
          name: "lion",
          description: "wild animal",
          count:5,
          imageUrl: "../../assets/images/lion.jpg"
        }
      ]
     return ani;
}

    getAnimalById(id:number){

      let ani:Animal[]=this.getAnimal();
      return ani.find(e=>e.id==id);
    }

    }