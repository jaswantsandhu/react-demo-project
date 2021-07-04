import { LOGIN_USER, GET_USER_INFO, createActionTypes } from "../action-type";
import axios from "axios";

export function loginUser({ email, password }) {
  return async function (dispatch) {
    const { initial, success, failure } = createActionTypes(LOGIN_USER);
    dispatch({ type: initial });
    try {
      const response = await axios
        .post("http://localhost:8080/login", { email, password })
        .then((response) => {
          return response.data;
        });

      console.log(response);

      window.localStorage.setItem("access-token", response.accessToken);
      dispatch({ type: success, payload: response });
    } catch (error) {
      dispatch({ type: failure });
    }
  };
}

export function getUserInfo() {
  return async function (dispatch) {
    const { initial, success, failure } = createActionTypes(GET_USER_INFO);
    dispatch({ type: initial });
    try {
      const token = window.localStorage.getItem("access-token");
      if (token) {
        const response = await axios
          .post(
            "http://localhost:8080/user",
            {},
            { headers: { authorization: token } }
          )
          .then((response) => {
            return response.data;
          });
          dispatch({ type: success, payload: response });
      }

    } catch (error) {
      dispatch({ type: failure });
    }
  };
}
