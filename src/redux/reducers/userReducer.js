import actionTypes from "../actions/actionTypes";

const userReducer = (currentUsers = {}, actions = {}) => {
  let newUser;
  switch (actions.type) {
    case actionTypes.registerUSer:
      newUser = { ...actions.user };
      break;
    case actionTypes.loginUser:
      newUser = [...currentUsers, actions.user];
      break;

    default:
      newUser = { ...currentUsers };
      break;
  }
  return newUser;
};

export default userReducer;
