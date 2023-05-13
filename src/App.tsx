//import { createBrowserRouter } from "react-router-dom";

import CardGridContainter from "./cardGridContainer/cardGridContainer";
import Content from "./content/Content";
import Layout from "./layout/Layout";

// const Div = styled.div`
//   color: "#000000";
//   background-color: ${(props) => props.theme.colors.error01};
//   font-size: ${(props) => props.theme.fontSize.base};
// `;

function App() {
  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <div style={{ position: "sticky", top: 0, backgroundColor: "red" }}>
          top navbar
        </div>
        <div>
          <Content>
            <div>filter floatant</div>
            <CardGridContainter>
              <div>Cards</div>
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
