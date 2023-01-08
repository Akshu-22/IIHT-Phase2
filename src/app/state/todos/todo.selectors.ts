import { createSelector } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import { TodoState } from "./todo.state";

export const todosDataState =  createFeatureSelector<TodoState>('todos');

export const getTodos =createSelector(todosDataState,state=>state.todos);