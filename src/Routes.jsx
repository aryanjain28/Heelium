import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import {ROOT_URL_PATH, ROUTES} from "./appConstant"

import RouteWithSubRoutes from "./routeHelper";

import { InventoryManagementContainer } from './Container/InventoryManagementContainer';
import { LoginContainer } from './Container/LoginContainer';
import { ManageUsersContainer } from "./Container/ManageUsersContainer";
import { ManageProductsContainer } from "./Container/ManageProductsContainer";
import { AddNewProductContainer } from "./Container/AddNewProductContainer";
import { UpdateExistingProductContainer } from "./Container/UpdateExistingProductContainer"


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
  {
    path: `${ROOT_URL_PATH}${ROUTES.manageUsers}`,
    exact: true,
    component: ManageUsersContainer,
    key: 3,
  },
  {
    path: `${ROOT_URL_PATH}${ROUTES.manageProducts}`,
    exact: true,
    component: ManageProductsContainer,
    key: 4,
  },
  {
    path: `${ROOT_URL_PATH}${ROUTES.addNewProduct}`,
    exact: true,
    component: AddNewProductContainer,
    key: 5,
  },
  {
    path: `${ROOT_URL_PATH}${ROUTES.updateProduct}`,
    exact: true,
    component: UpdateExistingProductContainer,
    key: 6,
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
