import React from 'react';

export const Notification = ({ notification }) => {

    const { date, fromUser, content } = notification;

    return (
        <div className="notification mb30 mt10">
            <div className="notif-left flex-display flexa-jcsb">
                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">{date}</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">{fromUser.name}</h4>
                <p className="mt4 textsize-3 cGray">{content}</p>
            </div>
        </div>
    )
}
