import React from "react";
import { ReactComponent as SearchGlass } from "../assets/search.svg";
import { ReactComponent as FilterIcon } from "../assets/filterIcon.svg";
import styled from "styled-components";

const SearchI = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  position: relative;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation01}`};
  div {
    display: flex;
    flex-direction: column;
  }
  .filterSearch {
    position: absolute;
    right: 10px;
    border: ${({ theme }) => `1px solid ${theme.colors.shade02}`};
    padding: 10px;
    border-radius: 100%;
  }
`;

const SearchContainer = styled.div`
  padding: 15px 20px;
`;

const Search = () => {
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

export default Search;
