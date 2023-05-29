import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import GlobalStyle from "./styles/globalStyles.ts";
import AppRouter from "./router/AppRouter.tsx";
import { UserProvider } from "./context/Context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
