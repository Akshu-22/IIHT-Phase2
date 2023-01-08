import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FoodActions from './food.actions';
import { FoodService } from 'src/app/shared/food.service';

@Injectable()
export class FoodEffects {

  constructor(private actions$: Actions, private foodService: FoodService) { }

  loadFoods$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(FoodActions.loadFood),
        mergeMap(() => this.foodService.getFood()
          .pipe(
            map(food => FoodActions.loadFoodsSuccess({ food })),
            catchError(error => of(FoodActions.loadFoodsFailure({ error })))
          )
        )
      );
  });

  updateFood$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(FoodActions.updateFood),
        concatMap(action =>
          this.foodService.updateFood(action.food)
            .pipe(
              map(food => FoodActions.updateFoodSuccess({ food })),
              catchError(error => of(FoodActions.updateFoodFailure({ error })))
            )
        )
      );
  });

  createFood$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(FoodActions.createFood),
        concatMap(action =>
          this.foodService.createFood(action.food)
            .pipe(
              map(food => FoodActions.createFoodSuccess({ food })),
              catchError(error => of(FoodActions.createFoodFailure({ error })))
            )
        )
      );
  });

  deleteFood$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(FoodActions.deleteFood),
        mergeMap(action =>
          this.foodService.deleteFood(action.foodId).pipe(
            map(() => FoodActions.deleteFoodSuccess({ foodId: action.foodId })),
            catchError(error => of(FoodActions.deleteFoodFailure({ error })))
          )
        )
      );
  });
}