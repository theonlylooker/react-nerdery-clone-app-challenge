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
import { useState, useRef, useEffect, useContext } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { StickyHeader, FixedBottomNav } from "./styles";
import WishListModal from "./wishListModal/WishListModal";
import useModal from "../hooks/useModal";
import { PlaceWithoutType } from "./type";
import { ENDPOINT, PLACE, WISHLIST } from "../shared/API";
import {
  WishlistContext,
  useWishlistContext,
} from "../context/WishlistContext";
import { UserContext, useUserContext } from "../context/Context";
import axios from "axios";

export const AuthorizedHome = () => {
  ////
  // const { user, setUser } = useContext(UserContext);
  // const { setWishlist } = useContext(WishlistContext);
  // const tokenString = localStorage.getItem("airbnbToken");
  // const userString = localStorage.getItem("airbnbUser");

  // const getWishslists = async (userId: string) => {
  //   try {
  //     const response = await axios.get(
  //       `${ENDPOINT}${WISHLIST}?userId=${userId}`
  //     );
  //     const data = await response.data;
  //     setWishlist(data);
  //   } catch (error) {
  //     console.log("error global");
  //   }
  // };

  // useEffect(() => {
  //   if (userString) {
  //     setUser(JSON.parse(userString));
  //     getWishslists(JSON.parse(userString).id);
  //   }
  // }, []);
  ////
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState({ location: 1 });
  const [currentPlace, setCurrentPlace] = useState<PlaceWithoutType | null>(
    null
  );
  const { modal, handleModal } = useModal();
  const URL = `${ENDPOINT}${PLACE}`;
  const { data, getNext, hasMore } = useInfiniteScroll(page);
  const handleCurrent = (current: PlaceWithoutType) => {
    setCurrentPlace(current);
  };
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPage((prevPage) => ({ ...page, location: prevPage.location + 1 }));
      }
    })
  );

  useEffect(() => {
    if (hasMore) {
      getNext();
    }
  }, [page]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <StickyHeader>
          <Header />
        </StickyHeader>
        <div>
          <Content>
            <FilterPrice />
            <CardGridContainter>
              {data &&
                data?.map((place, index) => {
                  return index === data.length - 1 && hasMore ? (
                    <div ref={setLastElement} key={index}>
                      <Card
                        key={place.id}
                        id={place.id}
                        image={place.image}
                        ownerId={place.ownerId}
                        description={place.description}
                        iconUser={place.iconUser}
                        country={place.country}
                        city={place.city}
                        rating={place.rating}
                        priceDay={place.priceDay}
                        //wished={allElements.includes(place.id)}
                        handleModal={handleModal}
                        handleCurrent={handleCurrent}
                      />
                    </div>
                  ) : (
                    <Card
                      key={place.id}
                      id={place.id}
                      image={place.image}
                      ownerId={place.ownerId}
                      description={place.description}
                      iconUser={place.iconUser}
                      country={place.country}
                      city={place.city}
                      rating={place.rating}
                      priceDay={place.priceDay}
                      //wished={allElements.includes(place.id)}
                      handleModal={handleModal}
                      handleCurrent={handleCurrent}
                    />
                  );
                })}
            </CardGridContainter>
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
