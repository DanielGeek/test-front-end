import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notificationsStartLoading } from '../../actions/notifications';
import { Notification } from './Notification';

export const NotificationsDetails = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(notificationsStartLoading());

    }, [dispatch])

    const { Notifications } = useSelector(state => state.notifications)

    return (
        <div className="sectionRight mb10">
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
            {
                Notifications.map(notification => {

                    return <Notification key={notification.id} notification={notification} />
                })
            }
        </div>
    )
}
