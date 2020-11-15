import { fetchApi } from "../helpers/fetch";
import { types } from "../types/types";

// obtener payments de la api
export const paymentsStartLoading = () => {
    return async (dispatch) => {
        try {
            dispatch(loadingPayments(true));
            const resp = await fetchApi('payments');
            const body = await resp.json();

            const payments = body;

            dispatch(paymentsLoaded(payments));

            dispatch(loadingPayments(false));

        } catch (error) {
            console.log(error);
        }
    }
}

// agregar al state de redux los payments de la bd
const paymentsLoaded = (payments) => ({
    type: types.loadedPayments,
    payload: payments
});

const loadingPayments = (loadingPayments) => ({
    type: types.loadingPayments,
    payload: loadingPayments
});
