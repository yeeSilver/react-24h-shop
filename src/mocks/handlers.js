import { rest } from "msw";

export const handlers = [
  // 4000번으로 요청을 보내고 프로덕트에 대한 요청이 가면 이런 식으로 여행상품들을 보내줌.
  rest.get(`http://localhost:4000/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "America",
          imagePath: "/images/america/jpeg",
        },
        {
          name: "England",
          imagePath: "/images/england.jpeg",
        },
      ])
    );
  }),
  // options에 대한 요청이 가면 이런식으로 응답을 보내줄 것.
  rest.get(`http://localhost:4000/options`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
        },
        {
          name: "Dinner",
        },
      ])
    );
  }),
];
