import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Email } from "./Email";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { expect } from "vitest";

const dampFunction1 = (params: string) => {
  params;
  return;
};
const dampFunction2 = (param1: string, param2: string) => {
  param1;
  param2;
  return;
};

beforeEach(() => {
  render(
    <ThemeProvider theme={theme}>
      <Email handleSwitchType={dampFunction1} handleUser={dampFunction2} />
    </ThemeProvider>
  );
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
