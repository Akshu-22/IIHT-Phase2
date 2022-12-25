export enum Category{
    cloths='cloths', footware='footware' ,electronicDevice='electronicDevice'
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    rating:number;
    image:string;


}