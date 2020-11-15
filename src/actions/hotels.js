import { fetchApi } from "../helpers/fetch";
import { types } from "../types/types";

// obtener hoteles de la api
export const hotelsStartLoading = () => {
    return async (dispatch) => {
        try {
            dispatch(loadingHotel(true));
            const resp = await fetchApi('hotels');
            const body = await resp.json();

            const hotels = body;
            dispatch(hotelsLoaded(hotels));

            dispatch(loadingHotel(false));

        } catch (error) {
            console.log(error);
        }
    }
}

// agregar al state de redux las notificaciones de la bd
const hotelsLoaded = (hotels) => ({
    type: types.loadedHotels,
    payload: hotels
});

const loadingHotel = (loading) => ({
    type: types.loadingHotels,
    payload: loading
});
