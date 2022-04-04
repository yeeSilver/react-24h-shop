// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// 어떠한 테스트가 시작하기 전에 먼저 서버를 실행
beforeAll(() => server.listen());
// 모든 테스트 끝난 뒤에는 핸들러 리셋
afterEach(() => server.resetHandlers());
// 모든 테스트 끝낸 다음에 서버 닫아줌
afterAll(() => server.close());
