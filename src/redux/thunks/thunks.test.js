import { loginUserThunk, registerUserThunk } from "./thunks";

import jwtDecode from "jwt-decode";

jest.mock("jwt-decode");

describe("Given a userRegisterThunk inner function", () => {
  describe("When it is called with a new user", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();
      const user = {
        name: "pepe",
        username: "pepito",
        password: "123",
      };

      const registerThunk = registerUserThunk(user);

      await registerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given loginUserrThunk inner function", () => {
  describe("When it is called with a user", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();
      jwtDecode.mockReturnValueOnce({ id: 1, username: "pepe" });

      const user = {
        name: "pepe",
        username: "pepito",
        password: "123",
      };

      const registerThunk = loginUserThunk(user);

      await registerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
