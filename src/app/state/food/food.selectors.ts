import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { Categ } from 'src/app/food/food';
import { FoodState } from './food.state';


const getFoodFeatureState = createFeatureSelector<FoodState>('foods');

export const getCurrentFoodId = createSelector(
  getFoodFeatureState,
  state => state.currentFoodId
);

export const getCurrentFood = createSelector(
  getFoodFeatureState,
  getCurrentFoodId,
  (state, currentFoodId) => {

    if (currentFoodId === 0) {
      return {
        id:0,
        name:'',
        category:Categ.indian,
        price:0,
        image:''
  
      };
    } else {
      return currentFoodId ? state.foods.find(p => p.id === currentFoodId) : null;
    }
  }
);

export const getProducts = createSelector(
  getFoodFeatureState,
  state => state.foods
);

export const getError = createSelector(
  getFoodFeatureState,
  state => state.error
);