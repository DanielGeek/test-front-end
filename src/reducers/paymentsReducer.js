
import { types } from '../types/types';

const initialState = {

    Payments: [],
    LoadingPayments: false
};

export const paymentsReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.loadedPayments:
            return {
                ...state,
                Payments: [...action.payload]
            }
        case types.loadingPayments: {
            return {
                ...state,
                LoadingPayments: action.payload
            }
        }

        default:
            return state;
    }
}