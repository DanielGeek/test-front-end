import React, { useEffect, useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHotelsByName } from '../../selectors/getHotelsByName';
import { HotelsView } from './HotelsView';
import { useDispatch, useSelector } from 'react-redux';
import { hotelsStartLoading } from '../../actions/hotels';
import styled from '@emotion/styled';

const DivSearchHotel = styled.div`
    width: 1000px;
    margin-top: 20px;
`;

export const HotelSearch = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hotelsStartLoading());
    }, [dispatch])

    const { Hotels } = useSelector(state => state.hotels);

    const hotelsFitered = useMemo(() => getHotelsByName(q, Hotels), [q, Hotels])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);

    }

    return (

        <DivSearchHotel>

            <h1>Pantalla búsqueda de hotel</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Formulario de búsqueda</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Encuentra un hotel"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Busca un hotel
                            </div>
                    }

                    {
                        (q !== '' && hotelsFitered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No existe hotel {q}
                        </div>
                    }

                    {
                        hotelsFitered.map(hotel => (
                            <HotelsView
                                key={hotel.id}
                                {...hotel}
                            />
                        ))
                    }
                </div>

            </div>

        </DivSearchHotel>
    )
}
