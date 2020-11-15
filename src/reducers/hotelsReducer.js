
import { types } from '../types/types';

const initialState = {
    Hotels: [],
    LoadingHotels: false
};

export const hotelsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.loadedHotels: {
            return {
                ...state,
                Hotels: [...action.payload]
            }
        }
        case types.loadingHotels: {
            return {
                ...state,
                LoadingHotels: action.payload
            }
        }

        default:
            return state;
    }
}