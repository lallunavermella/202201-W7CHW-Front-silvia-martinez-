import actionTypes from "../actions/actionTypes";

const initUser = JSON.parse(localStorage.getItem("UserToken")) || {};

const userReducer = (currentUser = initUser, actions = {}) => {
  let newUser;
  switch (actions.type) {
    case actionTypes.registerUSer:
      newUser = { ...actions.user };
      break;
    case actionTypes.loginUser:
      newUser = { ...actions.user };
      break;

    default:
      newUser = currentUser;
      break;
  }
  return newUser;
};

export default userReducer;
