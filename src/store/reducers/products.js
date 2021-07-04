import { GET_PRODUCTS_FOR_HOMEPAGE, createActionTypes, ADD_NEW_PRODUCT } from "../action-type";

const intialState = {
  products: [],
  loading : false,
};

const getProductForHomepageActions = createActionTypes(GET_PRODUCTS_FOR_HOMEPAGE);
const addNewProductActions = createActionTypes(ADD_NEW_PRODUCT);

export default function Products(state = intialState, action) {
  switch (action.type) {
    case getProductForHomepageActions.initial: {
        const newState = {...state};
        newState.loading = true;
        return newState;
    }
    case getProductForHomepageActions.success: {
        const newState = {...state};
        newState.loading = false;
        newState.products = action.payload
        return newState;
    }
    case getProductForHomepageActions.failure: {
        const newState = {...state};
        newState.loading = false;
        newState.products = [];
        return newState;
    }

    case addNewProductActions.success: {
        const newState = {...state};
        newState.products.push(action.payload.inserted)
        return newState;
    }

    default:
      return state;
  }
}
