import React from "react";
import SearchListing from "../../pages/search-listing"

import { Switch, Route } from "react-router-dom";

export default function Content()
    {
        return <Switch>
            <Route exact path="/">
                <div>Home Page</div>
            </Route>
            <Route path="/search">
                <SearchListing></SearchListing>
            </Route>
        </Switch>
    }

// 