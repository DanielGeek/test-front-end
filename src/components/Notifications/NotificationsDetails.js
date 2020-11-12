import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notificationsStartLoading } from '../../actions/store';
import { Notification } from './Notification';

export const NotificationsDetails = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(notificationsStartLoading());

    }, [dispatch])

    const { Notifications } = useSelector(state => state.store)

    return (
        <div className="sectionRight mb10">
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
            {/* TODO: obtener objeto de notis de la api y usar map para pintar el elemento con cada noti */}
            {
                Notifications.map(notification => {

                    return <Notification key={notification.id} notification={notification} />
                })
            }
        </div>
    )
}
