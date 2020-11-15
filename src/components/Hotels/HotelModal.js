import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { CloseModal } from '../../actions/modal';
import '../../css/modal.css';
import { clearActiveHotel } from '../../actions/hotels';

// posiciona el modal en el medio
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export const HotelModal = () => {

    const { modalOpen } = useSelector(state => state.modal);
    const { HotelActiveLoaded } = useSelector(state => state.hotels);

    const dispatch = useDispatch();
    // selecciono del store el atributo ui.modalOpen para asignarlo al componente modal y inciar con ese valor

    const closeModal = () => {
        // TODO: cerrar el modal
        // asigna false al state en uiReducer para cerrar el modal
        dispatch(CloseModal());
        // asigna null al activeEvent en el store
        dispatch(clearActiveHotel());
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1>Holel </h1>
            <hr />
            {
                HotelActiveLoaded ?
                    <div className={`card flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-${HotelActiveLoaded.id} wMin150 hMin150 m2px mt10 bcWhite`} >
                        <h2 className="textsize-1 fs-sbold cWhite">{HotelActiveLoaded.name}</h2>
                    </div>
                    :
                    null
            }

        </Modal>
    )
}
