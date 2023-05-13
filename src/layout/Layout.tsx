import React from "react";
import styled from "styled-components";

interface Layout {
  display: string;
  direction?: string;
}

const Layout = styled.div<Layout>`
  display: ${(props) => `${props.display}`};
  flex-direction: ${(props) =>
    props.display === "flex" ? `${props.direction}` : ""};
`;

// const Layout = () => {
//   return (
//     <Mylayout>
//       <div>asd</div>
//       <div>asd</div>
//     </Mylayout>
//   );
//};

export default Layout;
