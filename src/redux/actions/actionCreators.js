import actionTypes from "./actionTypes";

export const userRegisterAction = (user) => ({
  type: actionTypes.registerUSer,
  user,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
