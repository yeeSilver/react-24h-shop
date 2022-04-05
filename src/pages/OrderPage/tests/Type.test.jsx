import { render, screen } from "@testing-library/react";
import Type from "../Type";

test("displays product images from server", async () => {
  //Type안에 있는 Products 컴포넌트
  //orderType을 props로 전달
  render(<Type orderType="products" />);

  //Products 컴포넌트에 랜딩할 이미지 찾기
  const productImages = await screen.findAllByRole("img", {
    // products로 끝나는 이름, product를 대문자 소문자 가리지 않고 찾기(i에 담긴 뜻)
    name: /product$/i,
  });
  //handlers.js에보면 products로 요청보냈을때 이미지 2개 옴.
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((el) => el.alt);
  expect(altText).toEqual(["America product", "England product"]);
});
