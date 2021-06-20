export const GET_STORES_ACTION = "GET_STORES";
export const GET_STOREBYID_ACTION = "GET_STOREBYID";

export const ADD_TO_CART = "ADD_TO_CART"

export function createActionTypes(type) {
  return {
    initial: type,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`,
  };
}
