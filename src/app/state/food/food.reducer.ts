import { createReducer, on } from "@ngrx/store";
import { initialState } from "./food.state";
import { FoodState } from "./food.state";
import * as FoodActions from './food.actions'

export const foodReducer = createReducer<FoodState>(
    initialState,
    
    on(FoodActions.setCurrentFood, (state, action): FoodState => {
      return {
        ...state,
        currentFoodId: action.currentFoodId
      };
    }),
    on(FoodActions.clearCurrentFood, (state): FoodState => {
      return {
        ...state,
        currentFoodId: null
      };
    }),
    on(FoodActions.initializeCurrentFood, (state): FoodState => {
      return {
        ...state,
        currentFoodId: 0
      };
    }),
    on(FoodActions.loadFoodsSuccess, (state, action): FoodState => {
      return {
        ...state,
        foods: action.food,
        error: ''
      };
    }),
    on(FoodActions.loadFoodsFailure, (state, action): FoodState => {
      return {
        ...state,
        foods: [],
        error: action.error
      };
    }),
    on(FoodActions.updateFoodSuccess, (state, action): FoodState => {
      const updatedFoods = state.foods.map(
        item => action.food.id === item.id ? action.food : item);
      return {
        ...state,
        foods: updatedFoods,
        currentFoodId: action.food.id,
        error: ''
      };
    }),
    on(FoodActions.updateFoodFailure, (state, action): FoodState => {
      return {
        ...state,
        error: action.error
      };
    }),
    
    on(FoodActions.createFoodSuccess, (state, action): FoodState => {
      return {
        ...state,
        foods: [...state.foods, action.food],
        currentFoodId: action.food.id,
        error: ''
      };
    }),
    on(FoodActions.createFoodFailure, (state, action): FoodState => {
      return {
        ...state,
        error: action.error
      };
    }),
    
    on(FoodActions.deleteFoodSuccess, (state, action): FoodState => {
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.foodId),
        currentFoodId: null,
        error: ''
      };
    }),
    on(FoodActions.deleteFoodFailure, (state, action): FoodState => {
      return {
        ...state,
        error: action.error
      };
    })
  );