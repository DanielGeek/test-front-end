import React from 'react'

export const NotificationsView = () => {
    return (
        <div className="bloque bl mb30 flex-display flex-dir-r">
            <div className="notif-left ">
                <ion-icon className="cPurple icoSize3m" style={{ fontSize: '3em' }} name="mail-open-outline"></ion-icon>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Notificaciones</h4>
                <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
            </div>
        </div>
    )
}
