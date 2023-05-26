import { FC } from "react";
import { Search } from "../search/Search";
import { FilterCarrousel } from "../filterCarrousel/FilterCarrousel";
import { HeaderI } from "./styles";

interface Header {
  setPage: (props: { location: number }) => void;
  setCategory: (cateogory: string) => void;
}
export const Header: FC<Header> = ({ setPage, setCategory }) => {
  return (
    <HeaderI>
      <Search />
      <FilterCarrousel setPage={setPage} setCategory={setCategory} />
    </HeaderI>
  );
};
