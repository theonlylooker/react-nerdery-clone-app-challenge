import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlaceDetails } from "../pageDetails";
import { Signup } from "../signup&login";
import { Wishlist, WishlistDetail } from "../wishlist";
import ProtectedRoute from "../context/ProtectedRoute";
import { AuthorizedHome } from "../authorizedHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizedHome />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/wishlist/:id",
    element: <WishlistDetail />,
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
