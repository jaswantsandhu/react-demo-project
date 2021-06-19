import { createStore, combineReducers } from "redux";
import Cart from "./reducers/cart"
import Products from "./reducers/products"
import Stores from "./reducers/stores"

const reducers = combineReducers({
    cart : Cart,
    products : Products,
    stores : Stores
})

// {
//     cart : {  }, // state
//     products : {  },
//     stores : {  },
// }

// Single Reducer Implementation
// const store = createStore(Stores);

// Multi Reducer Implementation
const store = createStore(reducers);

export default store;