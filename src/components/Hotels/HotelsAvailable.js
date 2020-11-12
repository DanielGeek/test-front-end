import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const HotelsAvailable = () => {
    return (
        <Fragment>
            <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>

            <div className="row flex-dir-r w96Porc flex-wrap ">
                {/* TODO: hacer evento onclick para mostrar modal */}
                <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-1 wMin150 hMin150 m2px mt10 bcWhite">
                    <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                    <Link className="btn bcPurple" to="/#">Reservar</Link>
                </div>


                <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite">
                    <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                    <Link className="btn bcPurple" to="/#" >Reservar</Link>
                </div>
                <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-3 wMin150 hMin150 m2px mt10 bcWhite">
                    <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                    <Link className="btn bcPurple" to="/#">Reservar</Link>
                </div>
                <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-4 wMin150 hMin150 m2px mt10 bcWhite">
                    <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                    <Link className="btn bcPurple" to="/#">Reservar</Link>
                </div>

                <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-5 wMin150 hMin150 m2px mt10 bcWhite">
                    <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                    <Link className="btn bcPurple" to="/#">Reservar</Link>
                </div>
            </div>
        </Fragment>
    )
}
