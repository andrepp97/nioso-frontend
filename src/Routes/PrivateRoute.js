import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // CONTEXT
    const { userState } = useAuth()

    // RENDER
    return (
        <Route
            {...rest}
            render={
                props => userState.userToken
                ? <Component {...props} />
                : <Redirect to="/" />
            }
        />
    )
        };

export default PrivateRoute;