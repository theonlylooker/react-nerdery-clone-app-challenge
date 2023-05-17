import React from "react";
import Search from "../search/Search";
import FilterCarrousel from "../filterCarrousel/FilterCarrousel";
import styled from "styled-components";

const HeaderI = styled.div`
  /* position: sticky;
  top: 0;
  z-index: 1; */
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  box-shadow: ${({ theme }) => `${theme.elevation.elevation02}`};
`;

const Header = () => {
  return (
    <HeaderI>
      <Search />
      <FilterCarrousel />
    </HeaderI>
  );
};

export default Header;
