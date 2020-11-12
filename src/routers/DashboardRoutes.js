import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../components/NavBar/Navbar'
import { Home } from '../components/Home/Home'
import { HotelsView } from '../components/Hotels/HotelsView'
import { PaymentsViews } from '../components/Payments/PaymentsViews'
import { HotelSearch } from '../components/Hotels/HotelSearch'
import { NotificationsView } from '../components/Notifications/NotificationsView'
import { SettingsView } from '../components/SettingsView/SettingsView'

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/HOME" component={Home} />
                    <Route exact path="/HOTELS" component={HotelsView} />
                    <Route exact path="/NOTIFICATIONS" component={NotificationsView} />
                    <Route exact path="/PAYMENTS" component={PaymentsViews} />

                    <Route exact path="/HOTELS/SEARCH" component={HotelSearch} />

                    <Route exact path="/SETTINGS/VIEW" component={SettingsView} />

                    <Redirect to="/HOME" />
                </Switch>
            </div>
        </>
    )
}
