import React from "react";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import styled from "styled-components";

const BottomNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const BottomNavbarLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 10px 0px;
`;

const BottomNavbar = () => {
  return (
    <BottomNavbarLayout>
      <BottomNavbarItem>
        <Search /> Explore
      </BottomNavbarItem>
      <BottomNavbarItem>
        <Avatar /> Wishlist
      </BottomNavbarItem>
      <BottomNavbarItem>
        <Heart /> Log in
      </BottomNavbarItem>
    </BottomNavbarLayout>
  );
};

export default BottomNavbar;
