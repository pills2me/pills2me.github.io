import React from 'react';
import PropTypes from "prop-types";
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signedIn = false;

    if (isPrivate && !signedIn) {
        return <Redirect to="/" />;
    }

    if (!isPrivate && signedIn) {
        return <Redirect to="/signin" />
    }

    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypse = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}