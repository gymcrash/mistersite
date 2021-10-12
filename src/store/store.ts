import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { inputDataReducer, InputDataState } from "./inputData/inputDataReducers";


export interface AppState {
    inputDataState: InputDataState;
}

const rootReducer = combineReducers({ "inputDataState": inputDataReducer });


export const appStore = createStore(rootReducer, applyMiddleware(thunk));
