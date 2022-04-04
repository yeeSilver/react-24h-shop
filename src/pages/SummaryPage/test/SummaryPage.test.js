import SummaryPage from "../SummaryPage";
import { render, screen } from "@testing-library/react";

test("checkbox and button", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  // 처음에는 Equal = false 겠죠.
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", {
    name: "주문 확인",
  });
  // 체크박스가 체크되지 않으면 버튼을 못누르게 하려고 disabled해줌.
  expect(confirmButton.disabled).toBeTruthy();
});
