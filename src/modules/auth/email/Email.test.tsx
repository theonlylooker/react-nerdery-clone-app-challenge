import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Email } from "./Email";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { expect } from "vitest";
import { rest } from "msw";

const dampFunction1 = (params: string) => {
  return;
};
const dampFunction2 = (param1: string, param2: string) => {
  return;
};

let element: HTMLElement;

beforeEach(() => {
  const { baseElement } = render(
    <ThemeProvider theme={theme}>
      <Email handleSwitchType={dampFunction1} handleUser={dampFunction2} />
    </ThemeProvider>
  );
  element = baseElement;
});

test("Rendering Email component", () => {
  const inputText = screen.getByTestId("emailInput") as HTMLInputElement;
  expect(inputText.value).toBe("");
});

test("Continue with empty email", async () => {
  const continueButton = screen.getByTestId("continueButton");
  const inputText = screen.getByTestId("emailInput") as HTMLInputElement;
  expect(inputText.value).toBe("");
  await userEvent.click(continueButton);
  const error = await screen.findByTestId("error");
  expect(error.textContent).toBe(" Email is required");
});

test("Continue with wrong email", async () => {
  const continueButton = screen.getByTestId("continueButton");
  const inputText = screen.getByTestId("emailInput") as HTMLInputElement;
  await userEvent.type(inputText, "testing");
  expect(inputText.value).toBe("testing");
  await userEvent.click(continueButton);
  const error = await screen.findByTestId("error");
  expect(error.textContent).toBe(" Enter a valid email");
});

// test("Continue with right email", async () => {
//   const continueButton = screen.getByTestId("continueButton");
//   const inputText = screen.getByTestId("emailInput") as HTMLInputElement;
//   await userEvent.type(inputText, "test@test.com");
//   await userEvent.click(continueButton);
//   //await waitForElementToBeRemoved(element);
//   //await expect(element).not.toBeInTheDocument();
//   await waitFor(() => {
//     expect(element).not.toBeInTheDocument();
//   });
// });
