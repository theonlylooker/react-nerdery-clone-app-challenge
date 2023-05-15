//import { createBrowserRouter } from "react-router-dom";

import Card from "./card/Card";
import CardGridContainter from "./cardGridContainer/cardGridContainer";
import Content from "./content/Content";
import FilterPrice from "./filterPrice/FilterPrice";
import Footer from "./footer/Footer";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <div style={{ position: "sticky", top: 0, backgroundColor: "red" }}>
          top navbar
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
          <Footer />
        </div>
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
      </Layout>
    </>
  );
}

export default App;
