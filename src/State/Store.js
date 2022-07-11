import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { toDoReducer } from "./ToDoState";

const rootReducers = combineReducers({
    counter: counterReducer,
    todo:toDoReducer
})

export const store = createStore(rootReducers)