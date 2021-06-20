import { GET_STORES_ACTION, createActionTypes, GET_STOREBYID_ACTION } from "../action-type";

const intialState = {
  list: [],
};

const storesActions = createActionTypes(GET_STORES_ACTION);
const storeByIdActions = createActionTypes(GET_STOREBYID_ACTION);

// action > { type : STRING, payload : DATA }
export default function Stores(state = intialState, action) {
  switch (action.type) {
    case storesActions.initial: {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
    }
    case storesActions.success: {
        const newState = { ...state };
        newState.list = action.payload;
        newState.isLoading = false;
        return newState;
      }
    case storesActions.failure : {
        const newState = { ...state };
        newState.isLoading = false;
        return newState;
    }

    case storeByIdActions.initial: {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
    }
    case storeByIdActions.success: {
        const newState = { ...state };
        newState.selectedStore = action.payload;
        newState.isLoading = false;
        return newState;
      }
    case storeByIdActions.failure : {
        const newState = { ...state };
        newState.isLoading = false;
        return newState;
    }



    default: {
      return state;
    }
  }
}
