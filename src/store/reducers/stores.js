import { GET_STORES_ACTION } from "../action-type";

const intialState = {
    list: [],
}

// action > { type : STRING, payload : DATA }
export default function Stores(state = intialState, action) {

    console.log("IN Reducer - Stores")
    switch (action.type) {
        case GET_STORES_ACTION: {
            console.log("IN CASE - GET_STORES_ACTION")
            const newState = {...state};
            newState.list = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
}