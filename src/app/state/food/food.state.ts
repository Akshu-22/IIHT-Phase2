
import { IFood } from "src/app/food/food";
import * as AppState from "src/app/state/app.state";

export interface State extends AppState.State {
    food: FoodState;
  }
  export interface FoodState{
    currentFoodId:number | null;
    food:IFood[];
    error:string;
  }
  
  export const initialState:FoodState={
    currentFoodId:null,
    food:[],
    error:''
  }