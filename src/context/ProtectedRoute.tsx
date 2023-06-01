import { useContext } from "react";
import { UnauthorizedHome } from "../unathorizedHome";
import { AuthorizedHome } from "../authorizedHome/";
import { UserContext } from "./Context";
import { WishlistContext } from "./WishlistContext";
import axios from "axios";
import { ENDPOINT, WISHLIST } from "../shared/API";

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
      console.log("error");
    }
    // for (const id in userLists) {
    //   try {
    //     const response = await axios.get(`${ENDPOINT}${WISHLIST}/${id}`);
    //     const data = await response.data;
    //     setWishlist([...wishlist, data]);
    //   } catch (error) {
    //     console.log("error");
    //   }
    // }
  };
  if (userString) {
    setUser(JSON.parse(userString));
    if (user) getWishslists(user.id);
    return <AuthorizedHome />;
  }
  return <UnauthorizedHome />;
};

export default ProtectedRoute;
