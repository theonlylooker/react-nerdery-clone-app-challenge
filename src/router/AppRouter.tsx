import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home/Home";
import { PlaceDetails } from "../pageDetails/PlaceDetails";
import { Signup } from "../signup&login";

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
    element: <Signup />,
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
