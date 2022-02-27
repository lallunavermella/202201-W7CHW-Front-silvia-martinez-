import { registerUserThunk } from "./thunks";

describe("Given a userRegisterThunk inner function", () => {
  describe("When it is called with id 1", () => {
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
