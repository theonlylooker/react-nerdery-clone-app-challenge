import { useContext } from "react";
import { Heart, Search, Avatar, Airbnb } from "../../assets";
import { BottomNavbarItem, BottomNavbarLayout } from "./styles.ts";
import { UserContext } from "../../context/Context.tsx";
import { WishlistContext } from "../../context/WishlistContext.tsx";

export const BottomNavbar = () => {
  const { setUser } = useContext(UserContext);
  const { setWishlist } = useContext(WishlistContext);
  const logout = () => {
    localStorage.removeItem("airbnbToken");
    localStorage.removeItem("airbnbUser");
    setUser(null);
    setWishlist([]);
  };
  return (
    <BottomNavbarLayout>
      <BottomNavbarItem to={"/"}>
        <Search /> Explore
      </BottomNavbarItem>
      <BottomNavbarItem to={"/wishlist"}>
        <Heart /> Wishlist
      </BottomNavbarItem>
      <BottomNavbarItem to={"/"}>
        <Airbnb /> Trips
      </BottomNavbarItem>
      <BottomNavbarItem onClick={logout} to={"/"}>
        <Avatar /> Logout
      </BottomNavbarItem>
    </BottomNavbarLayout>
  );
};
