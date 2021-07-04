import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { getProductsForHomepage } from "../../store/actions/products";

export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });
  console.log(state);
  // Component Did Mount
  useEffect(() => {
    getProductsForHomepage()(dispatch);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">LEFT</div>
        <div className="col-9">
          {state.products &&
            state.products.length > 0 &&
            state.products.map((product, index) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.price}
                      {product.description}
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
