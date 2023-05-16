//import { createBrowserRouter } from "react-router-dom";

import Header from "./header/Header";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout display={"flex"} direction={"column"}>
        <div style={{ position: "sticky", top: 0, backgroundColor: "red" }}>
          <Header />
        </div>
        <div>
          grid container
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
