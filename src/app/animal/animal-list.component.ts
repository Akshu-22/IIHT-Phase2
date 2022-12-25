import { Component,OnInit} from '@angular/core';
import { IAnimal } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit{

  ngOnInit(): void {
    this.filteredAnimals = this.animals;
  }


  showImage:boolean=false;
  _animalNum:number=0;
  filteredAnimals:IAnimal[]=[];

  get animalNum():number{
    return  this._animalNum;
}

set animalNum(val:number){

 this._animalNum=val;
 console.log('in setter ',val);
 this.filteredAnimals=this.filterData(val);
 console.log('in setter',this.filteredAnimals);
}




  /*animals: any[] = [*/
  animals:IAnimal[]=[
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
  ];

  imageVisibility():void{

    this.showImage= !this.showImage;
  }

  filterData(val:number):IAnimal[]{
    val=this.animalNum;
    return this.animals.filter((animal:IAnimal)=>animal.count==val);
  
  
  
  }

}
