import { Header, Content, FilterPrice, Layout, BottomNavbar } from ".";
import { Footer } from "../shared";
import { useState } from "react";
import { StickyHeader, FixedBottomNav } from "./styles";
import WishListModal from "./wishListModal/WishListModal";
import useModal from "../../hooks/useModal";
import { PlaceWithoutType } from "./type";
import { Listing } from "./listing/Listing";

export const Home = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [currentPlace, setCurrentPlace] = useState<PlaceWithoutType | null>(
    null
  );
  const { modal, handleModal } = useModal();
  const handleCurrent = (current: PlaceWithoutType) => {
    setCurrentPlace(current);
  };
  const handleCategory = (category: string) => {
    setCategory(category);
  };
  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <StickyHeader>
          <Header handleCategory={handleCategory} />
        </StickyHeader>
        <div>
          <Content>
            <FilterPrice />
            <Listing handleCurrent={handleCurrent} handleModal={handleModal} />
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
