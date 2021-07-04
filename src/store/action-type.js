export const GET_STORES_ACTION = "GET_STORES";
export const GET_STOREBYID_ACTION = "GET_STOREBYID";
export const ADD_TO_CART = "ADD_TO_CART"
export const LOGIN_USER = "LOGIN_USER"
export const GET_USER_INFO = "GET_USER_INFO"
export const GET_PRODUCTS_FOR_HOMEPAGE = "GET_PRODUCTS_FOR_HOMEPAGE"
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT"


export function createActionTypes(type) {
  return {
    initial: type,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`,
  };
}
