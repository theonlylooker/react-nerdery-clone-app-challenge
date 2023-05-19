//import { createBrowserRouter } from "react-router-dom";

import Header from "./header/Header";
import Card from "./card/Card";
import CardGridContainter from "./cardGridContainer/cardGridContainer";
import Content from "./content/Content";
import FilterPrice from "./filterPrice/FilterPrice";
import Footer from "./footer/Footer";
import Layout from "./layout/Layout";
import { useState, useRef, useEffect, useCallback } from "react";
import { place } from "./card/type";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import BottomNavbar from "./bottomNavbar/BottomNavbar";
function App() {
  const [placeData, setPlaceData] = useState<place[] | null>();
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState({ location: 1 });
  const test3 = useRef(1);
  const URL = "http://localhost:3030/places";
  const { data, getNext, hasMore } = useInfiniteScroll(page);
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
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Header />
        </div>
        <div>
          <Content>
            <FilterPrice />
            <CardGridContainter>
              {data &&
                data?.map((place, index) => {
                  return index === data.length - 1 && hasMore ? (
                    <div ref={setLastElement} key={index}>
                      <Card
                        key={place.ownerId}
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
                      key={index}
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

        <div
          style={{
            position: "fixed",
            bottom: 0,
            backgroundColor: "blue",
            width: "100%",
          }}
        >
          <BottomNavbar />
        </div>
      </Layout>
    </>
  );
}

export default App;
