import {
  listUsersAction,
  loginUserAction,
  userRegisterAction,
} from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}register`, {
    method: "POST",

    body: user,
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
    const tokenResponse = await response.json();
    const { id, userName } = await jwtDecode(tokenResponse.token);
    localStorage.setItem(
      "UserToken",
      JSON.stringify({
        id,
        userName,
        token: tokenResponse.token,
      })
    );
    dispatch(loginUserAction({ id, userName, token: tokenResponse.token }));
  }
};

export const listUserThunks = async (dispatch, getState) => {
  const token = getState().user.token;

  const response = await fetch(`${process.env.REACT_APP_API_URL}list`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const users = await response.json();

  dispatch(listUsersAction(users));
};
