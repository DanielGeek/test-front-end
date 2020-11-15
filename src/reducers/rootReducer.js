import { combineReducers } from "redux";
import { hotelsReducer } from "./hotelsReducer";
import { notificationsReducer } from "./notificationsReducer";
import { paymentsReducer } from "./paymentsReducer";
import { modalReducer } from "./modalReducer";

// combina los reducers que seran mostrados en el state de mi store
export const rootReducer = combineReducers({
    hotels: hotelsReducer,
    notifications: notificationsReducer,
    payments: paymentsReducer,
    modal: modalReducer,
})