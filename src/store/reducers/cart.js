// Pure Function 
// CANNOT - Async Operation, setInterval, setTimeout, Promise, Http
// These are reffered as Side Effects and handled middlewares.

const intialState = {
    productsInCarts : [],
}

export default function Cart(state = intialState, action)
    {
        console.log("IN Reducer - Cart")
        return state;
    }