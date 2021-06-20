import React from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function Cart()
    {
        const cart = useSelector((state)=>{
            return state.cart
        })

        return <div className="user-cart">Cart ({cart.productsInCarts.length})</div>
    }