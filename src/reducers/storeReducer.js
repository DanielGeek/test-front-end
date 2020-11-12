
import { types } from '../types/types';

const initialState = {

    Notifications: [],
    Loading: false
};

export const storeReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.loadedNotifications:
            return {
                ...state,
                Notifications: [...action.payload]
            }
        case types.loading: {
            return {
                ...state,
                Loading: action.payload
            }
        }

        default:
            return state;
    }
}