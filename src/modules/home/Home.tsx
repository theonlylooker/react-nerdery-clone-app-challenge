import {
  Header,
  Card,
  CardGridContainter,
  Content,
  FilterPrice,
  Layout,
  BottomNavbar,
} from ".";
import { Footer } from "../shared";
import { useState, useRef, useEffect } from "react";
import { StickyHeader, FixedBottomNav } from "./styles";
import WishListModal from "./wishListModal/WishListModal";
import useModal from "../../hooks/useModal";
import { PlaceWithoutType } from "./type";
import { ENDPOINT, PLACE } from "../shared/API";
import { Listing } from "./listing/Listing";

export const Home = () => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState({ location: 1 });
  const [category, setCategory] = useState<string | null>(null);
  const [currentPlace, setCurrentPlace] = useState<PlaceWithoutType | null>(
    null
  );
  const { modal, handleModal } = useModal();
  const URL = `${ENDPOINT}${PLACE}`;
  const handleCurrent = (current: PlaceWithoutType) => {
    setCurrentPlace(current);
  };
  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <StickyHeader>
          <Header setPage={setPage} setCategory={setCategory} />
        </StickyHeader>
        <div>
          <Content>
            <FilterPrice />
            <Listing />
          </Content>
        </div>
        <WishListModal
          modal={modal}
          handleModal={handleModal}
          currentPlace={currentPlace}
        />
        <Footer />
        <FixedBottomNav>
          <BottomNavbar />
        </FixedBottomNav>
      </Layout>
    </>
  );
};
