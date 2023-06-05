import { House, Department, Cave, Mini, Dome, Farm } from "../../../assets";
import { Carrousel, FilterItem } from "./styles";

export const FilterCarrousel = () => {
  return (
    <Carrousel>
      <FilterItem onClick={() => alert("filter click")}>
        <House className="carrouselItem" />
        <span>Cabin</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Department className="carrouselItem" />
        <span>Department</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Cave className="carrouselItem" />
        <span>Caves</span>
      </FilterItem>
      <FilterItem onClick={() => alert("filter click")}>
        <Mini className="carrouselItem" />
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
