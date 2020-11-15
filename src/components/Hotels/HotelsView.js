import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeHotel } from '../../actions/hotels';
import { OpenModal } from '../../actions/modal';

export const HotelsView = ({
    id,
    name
}) => {
    const dispatch = useDispatch();

    const handleOpenModal = (id) => {
        dispatch(OpenModal());
        dispatch(activeHotel(id));
    }

    return (
        <Fragment>
            {/* TODO: hacer evento onclick para mostrar modal */}
            <div className={`card flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-${id} wMin150 hMin150 m2px mt10 bcWhite`} >
                <h2 className="textsize-1 fs-sbold cWhite">{name}</h2>
                <button className="btn bcPurple" onClick={() => handleOpenModal(id)}>Reservar</button>
            </div>
        </Fragment>
    )
}
