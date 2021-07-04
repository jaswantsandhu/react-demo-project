import { GET_PRODUCTS_FOR_HOMEPAGE, ADD_NEW_PRODUCT, createActionTypes } from "../action-type";
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

export function addNewProduct(product)
    {
        const { initial, success, failure } = createActionTypes(ADD_NEW_PRODUCT)
        return async function(dispatch){
            dispatch({ type : initial })
            try {
                const response = await axios.post("http://localhost:8080/products", product );
                dispatch({ type : success, payload : response.data })
            } catch (error) {
                dispatch({ type : failure })
            }
        }
    }

export function deleteProduct(id)
    {
        const { initial, success, failure } = createActionTypes(ADD_NEW_PRODUCT)
        return async function(dispatch){
            dispatch({ type : initial })
            try {
                const response = await axios.delete(`http://localhost:8080/products/${id}`, product );
                dispatch({ type : success, payload : response.data })
            } catch (error) {
                dispatch({ type : failure })
            }
        }
    }