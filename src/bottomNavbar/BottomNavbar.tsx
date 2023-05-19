import React from "react";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomNavbarItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => `${theme.colors.neutral04}`};
`;
const BottomNavbarLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 10px 0px;
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
`;

const BottomNavbar = () => {
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

export default BottomNavbar;
