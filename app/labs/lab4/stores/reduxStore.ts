import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./zustandStore";
type LabState = { count: number; todos: Todo[] };
const initialState: LabState = { count: 0, todos: [{id:1,title:"Learn Redux"},{id:2,title:"Build todo list"},{id:3,title:"Run build"}] };
const labSlice = createSlice({
  name:"lab4", initialState,
  reducers:{
    up: state => {state.count++;}, down: state => {state.count--;},
    addTodo: (state,action:PayloadAction<Todo>) => {state.todos.push(action.payload);},
    updateTodo: (state,action:PayloadAction<Todo>) => {const todo=state.todos.find(t=>t.id===action.payload.id);if(todo)todo.title=action.payload.title;},
    deleteTodo: (state,action:PayloadAction<number>) => {state.todos=state.todos.filter(t=>t.id!==action.payload);},
  }
});
export const {up,down,addTodo,updateTodo,deleteTodo} = labSlice.actions;
export const reduxStore = configureStore({reducer:{lab4:labSlice.reducer}});
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
