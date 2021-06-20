import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Cart from "./reducers/cart"
import Products from "./reducers/products"
import Stores from "./reducers/stores"

import thunk from "redux-thunk";

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
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;