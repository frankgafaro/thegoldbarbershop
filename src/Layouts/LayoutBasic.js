import React from "react";
import {Route, Switch} from "react-router-dom";
import "./LayoutBasic.scss";

const LayoutBasic = (props) => {
    const {routes} = props;

    const LoadRoutes = ({routes}) => {
        return (
            <Switch>
                {
                    routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    ))
                }
            </Switch>
        );
    }

    return (
        <>
            <LoadRoutes routes={routes}/>
        </>
    )
}

export default LayoutBasic