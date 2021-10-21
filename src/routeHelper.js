import React from 'react';
import { Route } from "react-router-dom";

const RouteWithSubRoutes = route => {

  return(
    <Route
      path={ route.path }
      exact={ route.exact }
      render={ props => (
        <route.component { ...props } {...route} routes={ route.routes } />
      )}
  />
)};

export default RouteWithSubRoutes;