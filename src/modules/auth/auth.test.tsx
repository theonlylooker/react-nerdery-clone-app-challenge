import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Auth } from "./Auth";
import { rest } from "msw";
import { build } from "@jackfranklin/test-data-bot";
import { faker } from "@faker-js/faker";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { expect, describe } from "vitest";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

let element: HTMLElement;

const buildLoginForm = build({
  fields: {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
});

beforeEach(() => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);
  const { baseElement } = render(
    <Router location={history.location} navigator={history}>
      <ThemeProvider theme={theme}>
        <Auth />
      </ThemeProvider>
    </Router>
  );
  element = baseElement;
});

describe("Auth Component", () => {
  test("Render component", async () => {
    const phone = screen.getByTestId("phone");
    expect(phone).toBeInTheDocument();
  });

  test("Switch Type Buttons", async () => {
    const swithEmailButton = screen.getByTestId("switchEmailButton");
    const phone = screen.getByTestId("phone");
    await userEvent.click(swithEmailButton);
    const switchPhoneButton = await screen.findByTestId("switchPhoneButton");
    const email = await screen.findByTestId("email");
    expect(phone).not.toBeInTheDocument();
    expect(email).toBeInTheDocument();
    await userEvent.click(switchPhoneButton);
    const newPhone = await screen.findByTestId("phone");
    expect(newPhone).toBeInTheDocument();
    expect(email).not.toBeInTheDocument();
  });

  test("Continue with new user", async () => {
    const { email, password } = buildLoginForm();
    const swithEmailButton = screen.getByTestId("switchEmailButton");
    await userEvent.click(swithEmailButton);
    const inputText = screen.getByTestId("emailInput") as HTMLInputElement;
    const continueButton = await screen.findByTestId("continueButton");
    await userEvent.type(inputText, email);
    expect(inputText.value).toBe(email);
    await userEvent.click(continueButton);
    const signup = await screen.findByTestId("signup");
    const passwordInput = screen.getByTestId("passwordInput");
    const agreeButton = screen.getByTestId("agreeButton");
    await userEvent.type(passwordInput, password);
    await userEvent.click(agreeButton);
  });
});
