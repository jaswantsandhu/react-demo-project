import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import StoreCard from "../../components/store-card";
import { Heading, Text } from "../../components/ui"
import { getStores } from "../../store/actions/stores"

// import axios from "axios";

function SearchListing({ stores, getStores, isLoading }) {

   
    useEffect(()=>{     
        getStores("hello");
    }, [])

    
    return <div className="search-listing">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Heading text="Search Results" />
                    <Text text={`${stores && stores.length} Stores`} />
                </div>
                {isLoading && <Heading text="Loading..." />}
                {!isLoading && <div className="col-9">
                    {stores && stores.map((store, index) => {
                        return <StoreCard store={store} key={store.id}/>
                    })}
                </div>}
            </div>
        </div>
    </div>
}

const mapStateToProps = function(state){
    console.log(state)
    // Always return object
    return {
        // key will be used as a property 
        stores : state.stores.list,
        isLoading : state.stores.isLoading,
    }
}

export default connect(mapStateToProps, { getStores })(SearchListing)