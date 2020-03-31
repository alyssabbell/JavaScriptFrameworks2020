import React from "react";
import App from "../App";
import { Route, Switch } from "react-router-dom";
import { Users } from "../View/Users";
import { CookieProvider } from "../Context/SessionContext";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const Routes = () => {
  return (
    <CookieProvider>
      <Switch>
        {/* Using route for what the user doesn't need to logged in to see. In this case, it's the login form */}
        <Route exact path="/" component={App} />
        {/**
         * Using a protected route for the content that user needs to be logged in to see
         * @see examples/11c-authentication-routing/src/components/ProtectedRoute.js
         */}
        <ProtectedRoute exact path="/Cookie/Users" component={Users} />
      </Switch>
    </CookieProvider>
  );
};
