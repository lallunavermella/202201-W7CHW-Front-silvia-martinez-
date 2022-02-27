import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}register`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "pepe",
        username: "pepito",
        password: "123",
      })
    )
  ),
  rest.post(`${process.env.REACT_APP_API_URL}login`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        token: "token",
      })
    )
  ),
];
