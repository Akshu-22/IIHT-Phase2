export enum Categ{
    indian='indian', chinese='chinese' ,thai='thai',korean='korean'
}
export interface IFood{

    id:number;
    name:string;
    category:Categ;
    price:number;
    image:string;
}