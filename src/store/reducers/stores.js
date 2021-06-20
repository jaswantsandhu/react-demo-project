import { GET_STORES_ACTION, GET_STORES_FAILURE_ACTION, GET_STORES_SUCCESS_ACTION } from "../action-type";

const intialState = {
  list: [],
};

// action > { type : STRING, payload : DATA }
export default function Stores(state = intialState, action) {
  switch (action.type) {
    case GET_STORES_ACTION: {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
    }
    case GET_STORES_SUCCESS_ACTION: {
        const newState = { ...state };
        newState.list = action.payload;
        newState.isLoading = false;
        return newState;
      }
    case GET_STORES_FAILURE_ACTION : {
        const newState = { ...state };
        newState.isLoading = false;
        return newState;
    }
    default: {
      return state;
    }
  }
}
