import React, { useContext, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { CookiesContext, CookieContext } from "../contexts/SessionContext";

export const ProtectedRoute = ({
    component: Component, // Capitalizing because React requires components names to be capitalized
    ...restOfPropsFromParent
}) => {


    // const { component, ...restOfProps } = props;
    // const Component = component;

    // console.log(Component);
    // console.log(restOfProps);

    console.log(restOfPropsFromParent);

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