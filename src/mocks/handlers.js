import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Pupe",
          userName: "Pepi",
          password: "1234",
          image: "unafoto",
        },
        {
          id: 2,
          name: "Pupe",
          userName: "Pepi",
          password: "1234",
          image: "unafoto",
        },
        {
          id: 3,
          name: "Pupe",
          userName: "Pepi",
          password: "1234",
          image: "unafoto",
        },
      ])
    );
  }),
  rest.post(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: "Pupe",
        userName: "Pepi",
      })
    );
  }),
];
