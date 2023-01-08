
import { IFood } from "src/app/food/food";
import * as AppState from "src/app/state/app.state";

export interface State extends AppState.State {
    foods: FoodState;
  }
  export interface FoodState{
    currentFoodId:number | null;
    foods:IFood[];
    error:string;
  }
  
  export const initialState:FoodState={
    currentFoodId:null,
    foods:[],
    error:''
  }