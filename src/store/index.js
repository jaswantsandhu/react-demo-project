import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Cart from "./reducers/cart"
import Products from "./reducers/products"
import Stores from "./reducers/stores"
import User from "./reducers/user";


const reducers = combineReducers({
    cart : Cart,
    products : Products,
    stores : Stores,
    user : User
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