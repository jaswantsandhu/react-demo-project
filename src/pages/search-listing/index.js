import React, { useEffect, useState } from "react";
import StoreCard from "../../components/store-card";
import { Heading, Text } from "../../components/ui"

import axios from "axios";

export default function SearchListing() {

    // [ state, setterMethodForState ]
    const [ stores, setStores ] = useState([])

    useEffect(()=>{
        // Promise
        axios.get("http://localhost:3600/stores")
        .then((response)=>{
            setStores(response.data);
        }).catch((error)=>{
            console.log("Error", error)
        })
    }, [])

    
    return <div className="search-listing">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Heading text="Search Results" />
                    <Text text={`${stores && stores.length} Stores`} />
                </div>
                <div className="col-9">
                    {stores && stores.map((store, index) => {
                        return <StoreCard store={store} key={store.id}/>
                    })}
                </div>
            </div>
        </div>
    </div>
}