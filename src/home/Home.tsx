import {
  Header,
  Card,
  CardGridContainter,
  Content,
  FilterPrice,
  Layout,
  BottomNavbar,
} from ".";
import { Footer } from "../shared/";
import { useState, useRef, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { StickyHeader, FixedBottomNav } from "./styles";
import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState({ location: 1 });
  //const [searchParams, setSearchParams] = useSearchParams();
  //const URL = "http://localhost:3030/places";
  const { data, getNext, hasMore } = useInfiniteScroll(page);
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPage((prevPage) => ({ ...page, location: prevPage.location + 1 }));
      }
    })
  );

  // useEffect(() => {
  //   const URL = `http://localhost:3030/places?${
  //     searchParams.get("type") ? `type=${searchParams.get("type")}&` : ""
  //   }_page=${page.location}`;
  //   console.log(URL);
  // }, [searchParams]);

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
          <Header setPage={setPage} />
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
                        key={place.placeId}
                        placeId={place.placeId}
                        image={place.image}
                        ownerId={place.ownerId}
                        description={place.description}
                        iconUser={place.iconUser}
                        country={place.country}
                        city={place.city}
                        rating={place.rating}
                        priceDay={place.priceDay}
                        wished={place.wished}
                      />
                    </div>
                  ) : (
                    <Card
                      key={place.placeId}
                      placeId={place.placeId}
                      image={place.image}
                      ownerId={place.ownerId}
                      description={place.description}
                      iconUser={place.iconUser}
                      country={place.country}
                      city={place.city}
                      rating={place.rating}
                      priceDay={place.priceDay}
                      wished={place.wished}
                    />
                  );
                })}
            </CardGridContainter>
          </Content>
        </div>
        <Footer />

        <FixedBottomNav>
          <BottomNavbar />
        </FixedBottomNav>
      </Layout>
    </>
  );
};
