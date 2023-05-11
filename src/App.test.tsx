import { render, screen } from "@testing-library/react";
//import { rest } from "msw";
import App from "./App";

// describe("App", () => {
//   it("renders headline", () => {
//     render(<App />);
//     screen.debug();

//     // check if App components renders headline
//   });
// });

test("First Test", () => {
  render(<App />);
  screen.debug();
  expect(1).toBe(2);
});
