import { FC } from "react";
import { Search } from "../search/Search";
import { FilterCarrousel } from "../filterCarrousel/FilterCarrousel";
import { HeaderI } from "./styles";

export const Header: FC = () => {
  return (
    <HeaderI>
      <Search />
      <FilterCarrousel />
    </HeaderI>
  );
};
