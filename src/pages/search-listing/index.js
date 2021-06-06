import React from "react";
import StoreCard from "../../components/store-card";
import { Heading, Text } from "../../components/ui"

import Stores from "../../mock/search-stores"

export default function SearchListing() {
    return <div className="search-listing">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Heading text="Search Results" />
                    <Text text="170 Stores" />
                </div>
                <div className="col-9">
                    { Stores.map((store, index)=>{
                        return <StoreCard store={store}/>
                    }) }
                </div>
            </div>
        </div>
    </div>
}