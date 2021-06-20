import { ADD_TO_CART, createActionTypes} from "../action-type";

export function addToCart(id) {
  return async function (dispatch) {
    const { initial, success, failure } = createActionTypes(ADD_TO_CART);
    dispatch({ type: initial, payload: { id } });
  };
}
