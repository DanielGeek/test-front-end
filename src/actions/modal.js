import { types } from "../types/types";

// return accion para abrir el modal
export const OpenModal = () => ({ type: types.OpenModal });
// return accion para cerrar el modal
export const CloseModal = () => ({ type: types.CloseModal }); 