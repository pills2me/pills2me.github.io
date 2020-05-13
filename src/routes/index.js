import React from 'react';
import { Switch } from 'react-router-dom';
import Route from "./Route";

import OpeningPage from '../pages/OpeningPage';
import SignUp from '../pages/SignUp';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={OpeningPage} />
            <Route path="/signup" component={SignUp} isPrivate />
        </Switch>
    )
}