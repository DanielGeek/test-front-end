import { fetchApi } from "../helpers/fetch";
import { types } from "../types/types";

// obtener notifications de la api
export const notificationsStartLoading = () => {
    return async (dispatch) => {
        try {
            dispatch(loadingNotifications(true));
            const resp = await fetchApi('notifications');
            const body = await resp.json();

            const notifications = body;
            console.log(notifications)
            dispatch(notificacionsLoaded(notifications));

            dispatch(loadingNotifications(false));

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

const loadingNotifications = (loadingNotifications) => ({
    type: types.loadingNotifications,
    payload: loadingNotifications
});
