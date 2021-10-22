import React from "react";

import { 
    BrowserRouter as Router, 
    Switch, 
    Redirect, 
    useLocation, 
    withRouter 
} from "react-router-dom";

import { ROUTES } from "../../appConstant"
import RouteWithSubRoutes from "../../routeHelper";
import { AppHeaderContainer } from "../AppHeaderContainer/index";
import { routes } from "../../Routes";

const AppLayoutContainer = () => {
    const location = useLocation();

    return (
        <Router>
            {/* {location.pathname !== "/login" &&
                <AppHeaderContainer />
            } */}
            <Switch>
                <Redirect exact from="/" to={`/${ROUTES.login}`}/>
                {routes.map((route) => {
                    return <RouteWithSubRoutes key={route.key} {...route}/>
                })}
            </Switch>
        </Router>
    )
}

export default withRouter(AppLayoutContainer);