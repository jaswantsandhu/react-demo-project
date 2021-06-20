import { GET_STORES_ACTION, GET_STORES_FAILURE_ACTION, GET_STORES_SUCCESS_ACTION } from "../action-type";
import axios from "axios";

export function getStores(message) {
    return async function(dispatch){
        dispatch({ type: GET_STORES_ACTION })
        try
            {
                const response = await axios.get("http://localhost:3600/stores", { timeout : 3000 });
                dispatch({ type: GET_STORES_SUCCESS_ACTION, payload : response.data })
            }
        catch(error)
            {
                dispatch({ type: GET_STORES_FAILURE_ACTION })
            }
    }
}