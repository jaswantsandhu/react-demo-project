import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import SearchListing from "../../pages/search-listing";
import StoreDetails from "../../pages/store-details";
import NotFound from "../../pages/not-found";
import AdminAddProduct from "../../pages/admin/add-products";
import LoginAuth from "../login-auth";
import AdminLoginPage from "../../pages/admin/login";

import { getUserInfo } from "../../store/actions/user";
import HomePage from "../../pages/homepage";
export default function Content() {
  const dispatch = useDispatch();
  useEffect(() => {
    // getUserInfo()(dispatch);
  }, []);

  return (
    <Switch>
      <Route exact path="/">
          <HomePage></HomePage>
      </Route>

      <Route path="/search/stores/:id">
        <StoreDetails></StoreDetails>
      </Route>

      <Route path="/search">
        <SearchListing></SearchListing>
      </Route>

      <Route path="/admin/add-product">
        {/* <LoginAuth roles={["admin", "sales"]}> */}
          <AdminAddProduct></AdminAddProduct>
        {/* </LoginAuth> */}
      </Route>
      <Route path="/admin/login">
        <AdminLoginPage></AdminLoginPage>
      </Route>

      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  );
}
