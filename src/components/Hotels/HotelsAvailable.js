import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotelsStartLoading } from '../../actions/hotels';
import { HotelsView } from './HotelsView';
import styled from "@emotion/styled";

const ContainerHotels = styled.div`
    margin-bottom: 200px;
    margin-left: 0px;
`;

export const HotelsAvailable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hotelsStartLoading());
        console.log(LoadingHotels)
    }, [dispatch])

    const { Hotels, LoadingHotels } = useSelector(state => state.hotels);
    return (
        <div className="row">
            <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>
            <ContainerHotels className="row flex-dir-r w96Porc flex-wrap ">
                {
                    Hotels.map(hotel => (
                        <HotelsView key={hotel.id}
                            {...hotel}
                        />
                    ))
                }
            </ContainerHotels>

        </div>
    )
}
