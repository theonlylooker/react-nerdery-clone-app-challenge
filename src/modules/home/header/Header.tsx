import { FC } from "react";
import { Search } from "../search/Search";
import { FilterCarrousel } from "../filterCarrousel/FilterCarrousel";
import { HeaderI } from "./styles";

interface Header {
  handleCategory: (category: string) => void;
}
export const Header: FC<Header> = ({ handleCategory }) => {
  return (
    <HeaderI>
      <Search />
      <FilterCarrousel handleCategory={handleCategory} />
    </HeaderI>
  );
};
