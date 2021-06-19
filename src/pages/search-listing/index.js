import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import StoreCard from "../../components/store-card";
import { Heading, Text } from "../../components/ui"
import { getStores } from "../../store/actions/stores"

// import axios from "axios";

function SearchListing({ stores, getStoresWithDispatch }) {

    // [ state, setterMethodForState ]
    // const [ stores, setStores ] = useState([])

    useEffect(()=>{
        // Promise
        // axios.get("http://localhost:3600/stores")
        // .then((response)=>{
        //     setStores(response.data);
        // }).catch((error)=>{
        //     console.log("Error", error)
        // })

        getStoresWithDispatch();

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

const mapStateToProps = function(state){
    console.log(state)
    // Always return object
    return {
        // key will be used as a property 
        stores : state.stores.list
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getStoresWithDispatch : ()=>{
            dispatch(getStores())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListing)