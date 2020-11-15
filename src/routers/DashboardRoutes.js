import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../components/NavBar/Navbar'
import { Home } from '../components/Home/Home'
import { PaymentsView } from '../components/Payments/PaymentsView'
import { HotelSearch } from '../components/Hotels/HotelSearch'
import { SettingsView } from '../components/SettingsView/SettingsView'
import { HotelsAvailable } from '../components/Hotels/HotelsAvailable'
import { NotificationsDetails } from '../components/Notifications/NotificationsDetails'
import { HotelModal } from '../components/Hotels/HotelModal'

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/hotels" component={HotelsAvailable} />
                    <Route exact path="/notifications" component={NotificationsDetails} />
                    <Route exact path="/payments" component={PaymentsView} />

                    <Route exact path="/hotels/search" component={HotelSearch} />

                    <Route exact path="/settings/view" component={SettingsView} />

                    <Redirect to="/home" />
                </Switch>
                <HotelModal />
            </div>
        </>
    )
}
