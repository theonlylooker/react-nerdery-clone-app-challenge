import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { expect, describe, vi } from "vitest";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Card } from "..";
import { theme } from "../../../styles/theme";
import { UserProvider } from "../../../context/UserContext";
import { Listing } from "../listing/Listing";

const dampFunction = () => {
  return;
};

describe("Card", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <Card
              city=""
              country=""
              description=""
              iconUser=""
              id=""
              image=""
              ownerId=""
              priceDay={1}
              rating={1}
              handleCurrent={dampFunction}
              handleModal={dampFunction}
            />
          </ThemeProvider>
        </UserProvider>
      </Router>
    );
  });

  test("rendering card", () => {
    const image = screen.getByTestId("image");
    const heart = screen.getByTestId("heart");
    const info = screen.getByTestId("info");
    const price = screen.getByTestId("price");
    const rating = screen.getByTestId("rating");
    expect(image).toBeInTheDocument();
    expect(heart).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  test("scroll fires an event", () => {
    const handleModal = vi.fn();
    const handleCurrent = vi.fn();

    // const observe = jest.fn();
    // const unobserve = jest.fn();
    // window.IntersectionObserver = jest.fn(() => ({ observe, unobserve }));

    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserver: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <Listing handleModal={handleModal} handleCurrent={handleCurrent} />
          </ThemeProvider>
        </UserProvider>
      </Router>
    );
    fireEvent.scroll(window, { target: { scrollY: 100 } });
  });
});
