import { SearchContainer, SearchI } from "./styles";
import { SearchGlass, FilterIcon } from "../../../assets";

export const Search = () => {
  return (
    <SearchContainer>
      <SearchI onClick={() => alert("search")}>
        <SearchGlass width={15.7} height={15.7} />
        <div>
          <h1>Anywhere</h1>
          <p>Any week - Add guests</p>
        </div>
        <div
          className="filterSearch"
          onClick={(e) => {
            e.stopPropagation();
            alert("this another click");
          }}
        >
          <FilterIcon width={16} height={16} />
        </div>
      </SearchI>
    </SearchContainer>
  );
};
