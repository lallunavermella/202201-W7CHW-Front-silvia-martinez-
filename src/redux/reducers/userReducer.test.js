import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userREducer function", () => {
  describe("When it receives currentUser and userRegister action with a valid user", () => {
    test("Then ut should return the user", () => {
      const currentUser = {};

      const user = {
        name: "pepe",
        username: "pepito",
        password: "123",
      };

      const action = {
        type: actionTypes.registerUSer,
        user,
      };
      const reducer = userReducer(currentUser, action);

      expect(reducer).toEqual(user);
    });
  });
  describe("When it receives a currentUser and a not existing action", () => {
    test("Then it should return a currentUser", () => {
      const currentUser = {};

      const user = {
        name: "pepe",
        username: "pepito",
        password: "123",
      };

      const action = {
        type: actionTypes.notWork,
        user,
      };
      const reducer = userReducer(currentUser, action);

      expect(reducer).toEqual(currentUser);
    });
  });
});
