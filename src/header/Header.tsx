import React from "react";
import Search from "../search/Search";
import FilterCarrousel from "../filterCarrousel/FilterCarrousel";

const Header = () => {
  return (
    <div>
      <Search />
      <FilterCarrousel />
    </div>
  );
};

export default Header;
