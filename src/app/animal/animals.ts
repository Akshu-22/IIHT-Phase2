import { Injectable } from "@angular/core";

export class Animal{

    id:number=0;
    name:string='';
    description:string='';
    count:number=0;
    constructor (id:number,name:string, description:string, count:number){this.id=id;this.name=name;this.description=description;this.count=count;}
}

@Injectable({
    providedIn:'root'
})
export class AnimalDetails{

    public getAnimal(){

     let ani:Animal[];
     ani=[
        new Animal(1,'tiger','wild animal',20),
        new Animal(2,'dog','domastic animal',50),
        new Animal(3,'lion','wild animal',25)

    ]
     return ani;
}

    getAnimalById(id:number){

      let ani:Animal[]=this.getAnimal();
      return ani.find(e=>e.id==id);
    }

    }