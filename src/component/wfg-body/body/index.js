import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../dashboard";

import StoreMaster from "../notifications";
import Inventory from "../profile";
import Order from "../products";
import PasswordChange from "../passwordChange";

const Body = ({
  headerLocationId,
  headerStoreId,
  headerRefresh,
  setHeaderRefresh
}) => {
  return (
    <Switch>
      <Route path={`/app/dashboard`} component={Dashboard} />
  
      <Route path={`/app/order`}>
        <Order headerStoreId={headerStoreId} />
      </Route>
      <Route path={`/app/inventory`}>
        <Inventory headerStoreId={headerStoreId} />
      </Route>
      <Route path={` /app/changePassword `}>
    <PasswordChange/>
    
      </Route>
      <Route path={`/app/store`}>
        <StoreMaster
         
        />
      </Route>
      
      <Redirect exact path="/app" to="/app/dashboard" />
    </Switch>
  );
};

export default Body;
