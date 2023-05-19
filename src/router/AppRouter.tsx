import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wishlist",
    element: <>wishlist</>,
  },
  {
    path: "/login",
    element: <>login</>,
  },
  {
    path: "/place/:id",
    element: <>elemento</>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
