import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Drivers from '../pages/Drivers';
import Merchants from '../pages/Merchant';
import PageNotFound from '../pages/404';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/drivers" component={Drivers} />
            <PrivateRoute exact path="/merchants" component={Merchants} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Routes;