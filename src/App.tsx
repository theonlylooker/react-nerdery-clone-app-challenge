//import { createBrowserRouter } from "react-router-dom";

import Card from "./card/Card";
import CardGridContainter from "./cardGridContainer/cardGridContainer";
import Content from "./content/Content";
import FilterPrice from "./filterPrice/FilterPrice";
import Footer from "./footer/Footer";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { place } from "./card/type";

function App() {
  const [placeData, setPlaceData] = useState<{ places: place[] } | null>();
  //memoize placeData to be a stable variable
  const URL = "http://localhost:3030/places";
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(URL);
      const data = response.data;
      if (data) {
        setPlaceData(data);
        console.log(placeData, "entre");
      }
    };
    fetch();
  }, [URL]);

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
          <div
            style={{
              position: "fixed",
              bottom: 0,
              backgroundColor: "blue",
              width: "100%",
            }}
          >
            bottom navbar
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
