import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentsStartLoading } from '../../actions/payments';
import { Payment } from './Payment';

export const PaymentsView = () => {

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(paymentsStartLoading());

    }, [dispatch])

    const { Payments, LoadingPayments } = useSelector(state => state.payments);

    return (
        <div className="sectionRight mb10">
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Payments</h2>

            {
                !LoadingPayments && Payments ?

                    Payments.map(payment => (

                        <Payment
                            key={payment.idReservation}
                            {...payment} />

                    ))
                    : null}
        </div>
    )
}
