import { GET_USER_INFO, createActionTypes } from "../action-type";

const intialState = {
  info: {},
};

const { success } = createActionTypes(GET_USER_INFO);

export default function User(state = intialState, action) {
  switch (action.type) {
    case success:
      const newState = { ...state };
      newState.info = action.payload.user;
      return newState;
    default:
      return state;
  }
}
