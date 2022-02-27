import actionTypes from "../actions/actionTypes";

const usersReducer = (currentUsers = [], action = {}) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.listUsers:
      newUsers = [...action.users.users];
      break;

    default:
      newUsers = currentUsers;
      break;
  }
  return newUsers;
};

export default usersReducer;
