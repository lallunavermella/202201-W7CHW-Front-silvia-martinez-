import { loginUserAction, userRegisterAction } from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const newUser = await response.json();
  dispatch(userRegisterAction(newUser));
};

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const token = await response.json();
    const { id, username } = await jwtDecode(token.token);
    localStorage.setItem("UserToken", token.token);
    dispatch(loginUserAction({ id, username, token: token.token }));
  }
};
