import { useContext, useEffect } from "react";
import { UnauthorizedHome } from "../unathorizedHome";
import { AuthorizedHome } from "../authorizedHome/";
import { UserContext } from "./Context";
import { WishlistContext } from "./WishlistContext";
import axios from "axios";
import { ENDPOINT, WISHLIST } from "../shared/API";

/*TODO: logout user after reload page because its a security breach to save the user on the localstorage */

const ProtectedRoute = () => {
  const { user, setUser } = useContext(UserContext);
  const { setWishlist } = useContext(WishlistContext);
  const tokenString = localStorage.getItem("airbnbToken");
  const userString = localStorage.getItem("airbnbUser");

  const getWishslists = async (userId: string) => {
    try {
      const response = await axios.get(
        `${ENDPOINT}${WISHLIST}?userId=${userId}`
      );
      const data = await response.data;
      setWishlist(data);
    } catch (error) {
      console.log("error global");
    }
  };

  useEffect(() => {
    if (userString) {
      setUser(JSON.parse(userString));
      getWishslists(JSON.parse(userString).id);
    }
  }, []);

  if (userString) {
    return <AuthorizedHome />;
  }
  return <UnauthorizedHome />;
};

export default ProtectedRoute;
