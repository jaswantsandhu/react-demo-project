import React from "react";
import SearchListing from "../../pages/search-listing"
import StoreDetails from "../../pages/store-details";
import NotFound from "../../pages/not-found";
import AdminAddProduct from "../../pages/admin/add-products";
import  LoginAuth from "../login-auth";
import AdminLoginPage from "../../pages/admin/login"

import { Switch, Route } from "react-router-dom";

export default function Content() {
    return <Switch>
        <Route exact path="/">
            <div>Home Page</div>
        </Route>

        <Route path="/search/stores/:id">
            <StoreDetails></StoreDetails>
        </Route>
        
        <Route path="/search">
            <SearchListing></SearchListing>
        </Route>

        <Route path="/admin/add-product">
            <LoginAuth roles={["admin", "sales"]}>
                <AdminAddProduct></AdminAddProduct>
            </LoginAuth>
        </Route>
        <Route path="/admin/login">
            <AdminLoginPage></AdminLoginPage>
        </Route>

        <Route path="*">
            <NotFound></NotFound>
        </Route>

    </Switch>
}

