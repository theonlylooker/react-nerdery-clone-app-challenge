import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import PlaceDetails from "../placeDetails/PlaceDetails";

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
    element: <PlaceDetails />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
