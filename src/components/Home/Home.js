import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hotels } from '../Hotels/Hotels';
import { HotelsAvailable } from '../Hotels/HotelsAvailable';
import { NotificationsView } from '../Notifications/NotificationsView';
import { NotificationsDetails } from '../Notifications/NotificationsDetails';
import { Payments } from '../Payments/Payments';

export const Home = () => {
    return (

        <section className="wMax1000 panel flex-one pl12em pr12em">

            <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div>
                    <NavLink activeClassName="active" className="mr2em" exact to="/HOTELS/SEARCH">
                        <ion-icon className="icoGray" name="search-outline"></ion-icon>
                    </NavLink>
                    <NavLink activeClassName="active" className="mr2em" exact to="/NOTIFICATIONS">
                        <ion-icon className="icoGray" name="mail-unread-outline"></ion-icon>
                    </NavLink>
                    <NavLink activeClassName="active" className="mr2em" exact to="/SETTINGS/VIEW">
                        <ion-icon className="icoGray" name="settings-outline"></ion-icon>
                    </NavLink>
                </div>
            </div>

            <div className="containerCenter">
                <div className="row flex-dir-c">
                    <div className="card p40 w96Porc gradient">
                        <h4 className="textsize-2 fs-regular cWhite">Bienvenido</h4>
                        <h2 className="textsize-1 fs-sbold cWhite mt10">David Anderson</h2>
                        <hr />
                        <p className="textsize-3 cWhite mt10">is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum text ever since the 1500s, when </p>
                    </div>

                    <div className="flex-display flex-dir-r card p10 w96Porc mt10 bcWhite flexa-jcsb">

                        <NavLink activeClassName="active" className="mr2em" exact to="/NOTIFICATIONS">
                            <NotificationsView />
                        </NavLink>


                        <NavLink activeClassName="active" className="mr2em" exact to="/HOTELS">
                            <Hotels />
                        </NavLink>


                        <NavLink activeClassName="active" className="mr2em" exact to="/PAYMENTS">
                            <Payments />
                        </NavLink>

                    </div>
                    <HotelsAvailable />

                </div>

                <NotificationsDetails />

            </div>

        </section>

    )
}
