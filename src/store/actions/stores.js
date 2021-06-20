import {
  GET_STORES_ACTION,
  createActionTypes,
  GET_STOREBYID_ACTION,
} from "../action-type";
import axios from "axios";

export function getStores(message) {
  const { initial, success, failure } = createActionTypes(GET_STORES_ACTION);

  return async function (dispatch) {
    dispatch({ type: initial });
    try {
      const response = await axios.get("http://localhost:3600/stores", {
        timeout: 3000,
      });
      dispatch({ type: success, payload: response.data });
    } catch (error) {
      dispatch({ type: failure });
    }
  };
}

export function getStoreById(id) {
  return async function (dispatch) {
    const { initial, success, failure } =
      createActionTypes(GET_STOREBYID_ACTION);
    dispatch({ type: initial });

    try {
      const response = await axios.get(`http://localhost:3600/stores/${id}`, {
        timeout: 3000,
      });
      dispatch({ type: success, payload: response.data });
    } catch (error) {
      dispatch({ type: failure });
    }
  };
}
