import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector, shallowEqual, connect } from "react-redux";
import axios from "axios";
import { getStoreById } from "../../store/actions/stores";
import { addToCart } from "../../store/actions/cart"

export default function StoreDetails({}) {
  const params = useParams();
  const dispatch = useDispatch();

  const store = useSelector((state) => {
    return state.stores.selectedStore;
  }, shallowEqual);

  useEffect(() => {
    getStoreById(params.id)(dispatch);
  }, []);

  function addProductToCart(id)
    {
        addToCart(id)(dispatch);
    }

  return (
    <div>
      {store &&
        store.products.map((product) => {
          return <div key={product.id}>{product.name} <button onClick={()=>{ addProductToCart(product.id) }}>Add to cart</button> </div>;
        })}
    </div>
  );
}
