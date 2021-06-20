import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { useDispatch, useSelector, shallowEqual, connect } from "react-redux";
import axios from "axios";
import { getStoreById } from "../../store/actions/stores"

export default function StoreDetails({ store })
    {
        const params = useParams()
        const dispatch = useDispatch();

        const selectedStore = useSelector((state)=>{
            return {
                store : state.stores.selectedStore
            }
        }, shallowEqual)

        useEffect(()=>{
            getStoreById(params.id)(dispatch);
        }, [])

        return <div>{JSON.stringify(selectedStore)}</div>
    }