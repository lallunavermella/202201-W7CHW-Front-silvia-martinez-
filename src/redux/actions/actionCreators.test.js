import { loginUserAction, userRegisterAction } from "./actionCreators";

describe("Given a userRegisterActions", () => {
  describe("When it receives a newuser", () => {
    test("Then it should return an action with a new user inside", () => {
      const newuser = [
        {
          name: "Pepe",
          password: "1234",
        },
        { name: "Pipo", password: "1234" },
      ];

      const expectedAction = { type: "register-user", user: newuser };
      const action = userRegisterAction(newuser);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loginUserActions", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action with a new user inside", () => {
      const user = [
        {
          userName: "Pepe",
          password: "1234",
        },
      ];

      const expectedAction = { type: "login-user", user: user };
      const action = loginUserAction(user);
      expect(action).toEqual(expectedAction);
    });
  });
});
