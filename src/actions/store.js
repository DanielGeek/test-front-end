import { fetchApi } from "../helpers/fetch";
import { types } from "../types/types";

// obtener ganadores de la bd
export const notificationsStartLoading = () => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const resp = await fetchApi('notifications');
            const body = await resp.json();

            const notifications = body;
            console.log(notifications)
            dispatch(notificacionsLoaded(notifications));

            dispatch(loading(false));

        } catch (error) {
            console.log(error);
        }
    }
}

// agregar al state de redux las notificaciones de la bd
const notificacionsLoaded = (notifications) => ({
    type: types.loadedNotifications,
    payload: notifications
});

export const loading = (loading) => ({
    type: types.loading,
    payload: loading
});
