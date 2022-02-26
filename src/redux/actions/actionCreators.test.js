import { userRegisterAction } from "./actionCreators";

describe("Given a userREgisterActions", () => {
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
