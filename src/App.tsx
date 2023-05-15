//import { createBrowserRouter } from "react-router-dom";

import Card from "./card/Card";
import CardGridContainter from "./cardGridContainer/cardGridContainer";
import Content from "./content/Content";
import FilterPrice from "./filterPrice/FilterPrice";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <div style={{ position: "sticky", top: 0, backgroundColor: "red" }}>
          <Header />
        </div>
        <Content>
          <FilterPrice />
          <CardGridContainter>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardGridContainter>
        </Content>
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
