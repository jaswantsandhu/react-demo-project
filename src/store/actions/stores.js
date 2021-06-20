import { GET_STORES_ACTION, GET_STORES_FAILURE_ACTION, GET_STORES_SUCCESS_ACTION } from "../action-type";
import axios from "axios";

export function getStores(message) {
    return function(dispatch){
        dispatch({ type: GET_STORES_ACTION, payload : [] })

        axios.get("http://localhost:3600/stores")
        .then((response)=>{
            dispatch({ type: GET_STORES_SUCCESS_ACTION, payload : response.data })
        })
        .catch(()=>{
            dispatch({ type: GET_STORES_FAILURE_ACTION, payload : [] })
        })

    }
}