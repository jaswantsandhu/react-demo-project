import React from "react";
import { Heading, Text } from "../../components/ui"


export default function SearchListing() {
    return <div className="search-listing">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Heading text="Search Results" />
                    <Text text="170 Stores" />
                </div>
                <div className="col-9">Search Items</div>
            </div>
        </div>
    </div>
}