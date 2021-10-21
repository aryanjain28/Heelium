import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import {ROOT_URL_PATH, ROUTES} from "./appConstant"

import RouteWithSubRoutes from "./routeHelper";

import { InventoryManagementContainer } from './Container/InventoryManagementContainer';
import { LoginContainer } from './Container/LoginContainer';


export const routes = [
  {
    path: `${ROOT_URL_PATH}${ROUTES.login}`,
    exact: true,
    component: LoginContainer,
    key: 1,
  },
  {
    path: `${ROOT_URL_PATH}${ROUTES.inventoryManagement}`,
    exact: true,
    component: InventoryManagementContainer,
    key: 2,
  },
];

const Routes = (props) => {

  const { routeList, routeDefinitions } = props;
  const routesList = routeList || routeDefinitions || [];

  return (
    <Router>
      <Switch>
        {routesList.map((route) => (
          <RouteWithSubRoutes key={route.key} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default withRouter(Routes);
