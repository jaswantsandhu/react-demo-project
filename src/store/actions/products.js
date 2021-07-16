import {
  GET_PRODUCTS_FOR_HOMEPAGE,
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  createActionTypes,
} from "../action-type";
import CreateRequest from "../../utils/api";

export function getProductsForHomepage() {
  const { initial, success, failure } = createActionTypes(
    GET_PRODUCTS_FOR_HOMEPAGE
  );
  return async function (dispatch) {
    dispatch({ type: initial });
    try {
      const response = await CreateRequest().get(
        "http://localhost:8080/products"
      );
      dispatch({ type: success, payload: response.data });
    } catch (error) {
      dispatch({ type: failure });
    }
  };
}

export function addNewProduct(product, image) {
  const { initial, success, failure } = createActionTypes(ADD_NEW_PRODUCT);
  return async function (dispatch) {
    dispatch({ type: initial });
    try {
      console.log(product);
      const form = new FormData();

      form.append("image", image, image.name);
      form.append("name", product.name);
      form.append("description", product.description);
      form.append("price", product.price);
      form.append("rating", product.rating);

      console.log(form);

      const response = await CreateRequest().post(
        "http://localhost:8080/products",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: success, payload: response.data });
    } catch (error) {
      dispatch({ type: failure });
    }
  };
}

export function deleteProduct(id) {
  const { initial, success, failure } = createActionTypes(DELETE_PRODUCT);
  return async function (dispatch) {
    dispatch({ type: initial });
    try {
      const response = await CreateRequest().delete(
        `http://localhost:8080/products/${id}`
      );
      dispatch({ type: success, payload: { id, ...response.data } });
    } catch (error) {
      dispatch({ type: failure });
    }
  };
}
