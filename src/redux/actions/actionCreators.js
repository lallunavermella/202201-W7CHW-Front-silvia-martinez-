import actionTypes from "./actionTypes";

export const userRegisterAction = (user) => ({
  type: actionTypes.registerUSer,
  user,
});
