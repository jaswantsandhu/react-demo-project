import { GET_PRODUCTS_FOR_HOMEPAGE, createActionTypes } from "../action-type";

const intialState = {
  products: [],
  loading : false,
};

const getProductForHomepageActions = createActionTypes(GET_PRODUCTS_FOR_HOMEPAGE);

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
    default:
      return state;
  }
}
