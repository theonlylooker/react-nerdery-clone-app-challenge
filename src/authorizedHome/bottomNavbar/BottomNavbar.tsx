import { Heart, Search, Avatar, Airbnb } from "../../assets";
import { BottomNavbarItem, BottomNavbarLayout } from "./styles.ts";

export const BottomNavbar = () => {
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
      <BottomNavbarItem to={"/"}>
        <Avatar /> Signout
      </BottomNavbarItem>
    </BottomNavbarLayout>
  );
};
