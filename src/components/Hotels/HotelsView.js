import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const HotelsView = ({
    id,
    name
}) => {
    return (
        <Fragment>
            {/* TODO: hacer evento onclick para mostrar modal */}
            <div className={`card flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-${id} wMin150 hMin150 m2px mt10 bcWhite`} >
                <h2 className="textsize-1 fs-sbold cWhite">{name}</h2>
                <Link className="btn bcPurple" to="/#">Reservar</Link>
            </div>
        </Fragment>
    )
}
