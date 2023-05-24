import { FC } from "react";
import { House, Department, Cave, Mini, Dome, Farm } from "../../assets";
import { Carrousel, FilterItem } from "./styles";
import { useSearchParams } from "react-router-dom";

interface FilterCarrousel {
  setPage: (props: { location: number }) => void;
}

export const FilterCarrousel: FC<FilterCarrousel> = ({ setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Carrousel>
      <FilterItem
        onClick={() => {
          setPage({ location: 1 });
          setSearchParams("type=cabins", { replace: true });
        }}
      >
        <House className="carrouselItem" />
        <span>Cabin</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setPage({ location: 1 });
          setSearchParams("type=department", { replace: true });
        }}
      >
        <Department className="carrouselItem" />
        <span>Department</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setPage({ location: 1 });
          setSearchParams("type=caves", { replace: true });
        }}
      >
        <Cave className="carrouselItem" />
        <span>Caves</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setPage({ location: 1 });
          setSearchParams("type=mini", { replace: true });
        }}
      >
        <Mini className="carrouselItem" />
        <span>Minihouse</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setPage({ location: 1 });
          setSearchParams("type=dome", { replace: true });
        }}
      >
        <Dome className="carrouselItem" />
        <span>Dome</span>
      </FilterItem>
      <FilterItem
        onClick={() => {
          setPage({ location: 1 });
          setSearchParams("type=farm", { replace: true });
        }}
      >
        <Farm className="carrouselItem" />
        <span>Farm</span>
      </FilterItem>
    </Carrousel>
  );
};
