import { combineReducers } from "redux";
import { storeReducer } from "./storeReducer";

// combina los reducers que seran mostrados en el state de mi store
export const rootReducer = combineReducers({
    store: storeReducer
})