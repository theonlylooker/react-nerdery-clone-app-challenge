import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlaceDetails } from "../modules/pageDetails";
import { Wishlist, WishlistDetail } from "../modules/wishlist";
import { Home } from "../modules/home";
import { Auth } from "../modules/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <Auth />,
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
