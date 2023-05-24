import { FC } from "react";
import { Search } from "../search/Search";
import { FilterCarrousel } from "../filterCarrousel/FilterCarrousel";
import { HeaderI } from "./styles";

interface Header {
  setPage: (props: { location: number }) => void;
}
export const Header: FC<Header> = ({ setPage }) => {
  return (
    <HeaderI>
      <Search />
      <FilterCarrousel setPage={setPage} />
    </HeaderI>
  );
};
