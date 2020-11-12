import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline'
import IosMailOutline from 'react-ionicons/lib/IosMailOutline'
import IosCard from 'react-ionicons/lib/IosCard'
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline'

import IosExitOutline from 'react-ionicons/lib/IosExitOutline'

export const Navbar = () => {

    return (
        <nav className="h100vh w60 panel bcPurple flexa-jcsb flexa-ai">
            <div className="panel">
                {/* HOME */}
                <NavLink activeClassName="active" className="mt10 mb30 h50px" exact to="/HOME">
                    <IosAnalyticsOutline className="cWhite" fontSize="35px" color="#C9C9C9" beat={true} />
                </NavLink>

                {/* HOTELS   */}
                <NavLink activeClassName="active" className="mt30" exact to="/HOTELS">
                    <IosAppsOutline className="cWhite" fontSize="35px" color="#C9C9C9" />
                </NavLink>

                {/* NOTIFICATIONS */}
                <NavLink activeClassName="active" className="mt30" exact to="/NOTIFICATIONS">
                    <IosMailOutline className="cWhite" fontSize="35px" color="#C9C9C9" />
                </NavLink>

                {/* PAYMENTS */}
                <NavLink activeClassName="active" className="mt30" exact to="/PAYMENTS">
                    <IosCard className="cWhite" fontSize="35px" color="#C9C9C9" />
                </NavLink>

            </div>
            <Link className="mb10" to="/HOME">
                <IosExitOutline fontSize="35px" color="#C9C9C9" />
            </Link>
        </nav>
    )
}
