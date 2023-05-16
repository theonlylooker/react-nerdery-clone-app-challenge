//import { createBrowserRouter } from "react-router-dom";

import Header from "./header/Header";
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
          footer <br /> footer <br /> footer
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
