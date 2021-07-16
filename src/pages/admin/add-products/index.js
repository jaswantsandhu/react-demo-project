import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  getProductsForHomepage,
  deleteProduct,
} from "../../../store/actions/products";

export default function AdminAddProduct() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });

  const [uploadFile, setUploadFile] = useState(null)

  useEffect(() => {
    getProductsForHomepage()(dispatch);
  }, []);

  function handleDeleteProduct(id) {
    deleteProduct(id)(dispatch);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Formik
            initialValues={{}}
            // validate={(values) => {
            //   const errors = {};

            //   if (values.email === "") {
            //     errors.email = "Email  cannot be blank";
            //   }

            //   return errors;
            // }}
            onSubmit={(values, { resetForm }) => {
              addNewProduct(values, uploadFile)(dispatch);
              resetForm({});
            }}
          >
            {({ handleChange, handleSubmit, values, errors }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      placeholder="Pizza, Fries."
                      name="name"
                      value={values.name}
                    />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="textarea"
                      name="description"
                      value={values.description}
                    />
                  </Form.Group>

  
                  <Form.Group controlId="price">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="number"
                      placeholder="Price in rupees"
                      name="price"
                      value={values.price}
                    />
                  </Form.Group>

                  <Form.Group controlId="rating">
                    <Form.Label>Product rating</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="number"
                      placeholder="Upto 5"
                      name="rating"
                      value={values.rating}
                    />
                  </Form.Group>

                  <Form.Group controlId="rating">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                      onChange={(event)=>{
                        setUploadFile(event.target.files[0])
                      }}
                      type="file"
                      name="image"
                      value={values.image}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="col-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {state.products &&
                state.products.length > 0 &&
                state.products.map((product) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <Button onClick={()=>{
                          handleDeleteProduct(product._id)
                        }}>❌</Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
