import React from "react";
import { ReactComponent as House } from "../assets/house.svg";
import { ReactComponent as Department } from "../assets/department.svg";
import { ReactComponent as Cave } from "../assets/cave.svg";
import { ReactComponent as Minihouse } from "../assets/minihouse.svg";
import { ReactComponent as Dome } from "../assets/dome.svg";
import { ReactComponent as Farm } from "../assets/farm.svg";
import styled from "styled-components";

const FilterItem = styled.button`
  &.active {
    font-size: 40px;
  }
  display: flex;
  background-color: inherit;
  border: none;
  flex-direction: column;
  align-items: center;
  padding: 4px 0px;
  transition: 0.4s;
  color: ${({ theme }) => `${theme.colors.neutral04}`};
  .carrouselItem {
    width: 24px;
    path {
      transition: 0.4s;
      fill: ${({ theme }) => `${theme.colors.neutral04}`};
    }
  }
  &:hover {
    box-shadow: ${({ theme }) => `0 1px 0 ${theme.colors.neutral04}`};
    color: ${({ theme }) => `${theme.colors.shade02}`};
    .carrouselItem {
      path {
        fill: ${({ theme }) => `${theme.colors.shade02}`};
      }
    }
  }
`;

const Carrousel = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  scroll-snap-type: none;
  gap: 30px;
  padding: 1px 24px;
  font-size: 12px;
`;

const FilterCarrousel = () => {
  return (
    <Carrousel>
      <FilterItem onClick={() => alert("filter click")}>
        <House className="carrouselItem" />
        <span>Cabañas</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Department className="carrouselItem" />
        <span>Departamento</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Cave className="carrouselItem" />
        <span>Caves</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Minihouse className="carrouselItem" />
        <span>Minihouse</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Dome className="carrouselItem" />
        <span>Dome</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Farm className="carrouselItem" />
        <span>Farm</span>
      </FilterItem>
    </Carrousel>
  );
};

export default FilterCarrousel;
