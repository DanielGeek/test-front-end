
import { types } from '../types/types';

const initialState = {
    Hotels: [],
    LoadingHotels: false,
    HotelActiveLoaded: null
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

        case types.loadedActiveHotel: {
            return {
                ...state,
                HotelActiveLoaded: action.payload
            }
        }

        case types.clearActiveHotel: {
            return {
                ...state,
                HotelActiveLoaded: null
            }
        }

        default:
            return state;
    }
}