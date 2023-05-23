import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home/Home";
import { PlaceDetails } from "../pageDetails/PlaceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <PlaceDetails />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
