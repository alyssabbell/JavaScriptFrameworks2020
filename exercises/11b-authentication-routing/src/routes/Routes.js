import React from "react";
import App from "../App";
import { Route, Switch } from "react-router-dom";
import { Movies } from "../views/Movies";
import { CookieProvider } from "../contexts/SessionContext";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const Routes = () => {
    return (
        <CookieProvider>
            <Switch>
                <Route exact path="/" component={App} />
                <ProtectedRoute exact path="/Cookie/Movies" component={Movies} />
            </Switch>
        </CookieProvider>
    );
};