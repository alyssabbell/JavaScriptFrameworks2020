import React, { useContext, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { CookieContext } from "../contexts/SessionContext";

/* * * * * *  ProtectedRoute.jsx is going to render everything
inside the movies Component because that's what this file does - 
it renders the Movie Component * * * * * * * */

export const ProtectedRoute = ({
    component: Component, // Capitalizing because React requires components names to be capitalized
    ...restOfPropsFromParent
}) => {
    // export const ProtectedRoute = (props) => {

    //console.log("Protected routes props", props);
    // const { component, ...restOfProps } = props;
    // const Component = component;

    // console.log(Component);
    // console.log(restOfProps);

    // console.log(restOfPropsFromParent);

    const [uuid] = useContext(CookieContext);

    //const newComponents = { ...props.Component };
    //console.log(newComponents);
    // 
    return (
        // <div>protected reached</div>
        <Route
            {...restOfPropsFromParent}
            render={propsFromRouter => {
                return uuid ? (
                    <Component {...restOfPropsFromParent} />
                ) :
                    (
                        <Redirect
                            to="/"
                            {...propsFromRouter}
                            {...restOfPropsFromParent}
                        />
                    );
            }}
        />
    );
};