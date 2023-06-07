import { FC } from "react";
import { House, Department, Cave, Mini, Dome, Farm } from "../../../assets";
import { Carrousel, FilterItem } from "./styles";
import { useSearchParams } from "react-router-dom";

interface FilterCarrousel {
  handleCategory: (category: string) => void;
}

export const FilterCarrousel: FC<FilterCarrousel> = ({ handleCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Carrousel>
      <FilterItem
        onClick={() => {
          setSearchParams("type=cabins", { replace: true });
        }}
      >
        <House className="carrouselItem" />
        <span>Cabin</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSearchParams("type=department", { replace: true });
        }}
      >
        <Department className="carrouselItem" />
        <span>Department</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSearchParams("type=caves", { replace: true });
        }}
      >
        <Cave className="carrouselItem" />
        <span>Caves</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSearchParams("type=mini", { replace: true });
        }}
      >
        <Mini className="carrouselItem" />
        <span>Minihouse</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSearchParams("type=dome", { replace: true });
        }}
      >
        <Dome className="carrouselItem" />
        <span>Dome</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSearchParams("type=farm", { replace: true });
        }}
      >
        <Farm className="carrouselItem" />
        <span>Farm</span>
      </FilterItem>
    </Carrousel>
  );
};
