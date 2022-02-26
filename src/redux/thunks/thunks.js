import { userRegisterAction } from "../actions/actionCreators";

export const registerUserThunk =
  ({ name, image, username, password }) =>
  async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        username,
        password,
      }),
    });
    const newUser = await response.json();

    if (response.ok) {
      dispatch(userRegisterAction(newUser));
    }
  };
