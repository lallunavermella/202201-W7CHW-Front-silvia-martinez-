import { userRegisterAction } from "../actions/actionCreators";

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
