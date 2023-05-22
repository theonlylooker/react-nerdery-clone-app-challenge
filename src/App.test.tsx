import { render, screen } from "@testing-library/react";
//import { rest } from "msw";
import Home from "./pages/Home";

// describe("App", () => {
//   it("renders headline", () => {
//     render(<App />);
//     screen.debug();

//     // check if App components renders headline
//   });
// });

test("First Test", () => {
  render(<Home />);
  screen.debug();
  expect(1).toBe(2);
});
