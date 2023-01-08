import { createAction,props } from "@ngrx/store";
import { IFood } from "src/app/food/food";


export const setCurrentFood = createAction(
    '[Food] Set Current Food',
    props<{ currentFoodId: number }>()
  );

export const clearCurrentFood = createAction(
    '[Food] Clear Current Food'
  );

export const initializeCurrentFood = createAction(
    '[Food] Initialize Current Food'
  );

export const loadFood = createAction(
    '[Food] Load'
  );

export const loadFoodsSuccess = createAction(
    '[Food] Load Success',
    props<{ food: IFood[] }>()
  );

export const loadFoodsFailure = createAction(
    '[Food] Load Fail',
    props<{ error: string }>()
  );

export const updateFood = createAction(
    '[Food] Update Food',
    props<{ food: IFood }>()
  );

  export const updateFoodSuccess = createAction(
    '[Food] Update Food Success',
    props<{ food: IFood }>()
  );
  export const updateFoodFailure = createAction(
    '[Food] Update Food Fail',
    props<{ error: string }>()
  );
  
  export const createFood = createAction(
    '[Food] Create Food',
    props<{ food: IFood }>()
  );

  export const createFoodSuccess = createAction(
    '[Food] Create Food Success',
    props<{ food: IFood }>()
  );
  
  export const createFoodFailure = createAction(
    '[Food] Create Food Fail',
    props<{ error: string }>()
  );

  export const deleteFood = createAction(
    '[Food] Delete Food',
    props<{ foodId: number }>()
  );
  
  export const deleteFoodSuccess = createAction(
    '[Food] Delete Food Success',
    props<{ foodId: number }>()
  );
  
  export const deleteFoodFailure = createAction(
    '[Food] Delete Food Fail',
    props<{ error: string }>()
  );
  