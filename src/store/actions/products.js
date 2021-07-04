import { GET_PRODUCTS_FOR_HOMEPAGE, createActionTypes } from "../action-type";
import axios from "axios"

export function getProductsForHomepage()
    {
        const { initial, success, failure } = createActionTypes(GET_PRODUCTS_FOR_HOMEPAGE)
        return async function(dispatch){
            dispatch({ type : initial })
            try {
                const response = await axios.get("http://localhost:8080/products");
                dispatch({ type : success, payload : response.data })
            } catch (error) {
                dispatch({ type : failure })
            }
        }
    }