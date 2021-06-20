// Pure Function 
// CANNOT - Async Operation, setInterval, setTimeout, Promise, Http
// These are reffered as Side Effects and handled middlewares.

import { ADD_TO_CART, createActionTypes } from "../action-type";

const intialState = {
    productsInCarts : [],
}

const cartActions = createActionTypes(ADD_TO_CART);

export default function Cart(state = intialState, action)
    {
        switch (action.type) {
            case cartActions.initial: {
                const newState = {...state}
                const { id } = action.payload;
                newState.productsInCarts.push(id);
                return newState;
            }
            default: {
                return state;
            }
               
        }
    }