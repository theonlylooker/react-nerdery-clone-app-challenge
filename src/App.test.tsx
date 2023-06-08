import { render, screen } from "@testing-library/react";
import { Home } from "./modules/home";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { createMemoryHistory } from "history";

// beforeEach(() => {
//   const history = createMemoryHistory();
//   const route = "/";
//   history.push(route);
//   const { baseElement } = render(
//     <Router location={history.location} navigator={history}>
//       <ThemeProvider theme={theme}>
//         <Home />
//       </ThemeProvider>
//     </Router>
//   );
// });

test("First Test", () => {
  screen.debug();
});
