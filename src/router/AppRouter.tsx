import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UnauthorizedHome } from "../unathorizedHome";
import { PlaceDetails } from "../pageDetails";
import { Signup } from "../signup&login";
import ProtectedRoute from "../context/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
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
