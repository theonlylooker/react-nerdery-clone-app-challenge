import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlaceDetails } from "../pageDetails";
import { Signup } from "../signup&login";
import { Wishlist, WishlistDetail } from "../wishlist";
import ProtectedRoute from "../context/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/wishlist/:id",
    element: <>asd</>, //<WishlistDetail />,
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
