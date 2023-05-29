import { Heart, Search, Avatar } from "../../assets";
import { BottomNavbarItem, BottomNavbarLayout } from "./styles.ts";

export const BottomNavbar = () => {
  return (
    <BottomNavbarLayout>
      <BottomNavbarItem to={"/"}>
        <Search /> Explore
      </BottomNavbarItem>
      <BottomNavbarItem to={"/wishlist"}>
        <Avatar /> Wishlist
      </BottomNavbarItem>
      <BottomNavbarItem to={"login"}>
        <Heart /> Log in
      </BottomNavbarItem>
    </BottomNavbarLayout>
  );
};
