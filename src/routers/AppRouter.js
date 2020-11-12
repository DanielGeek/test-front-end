import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  return (
    <Router>
      <div className="container">

        <Switch>
          <PublicRoute
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
}