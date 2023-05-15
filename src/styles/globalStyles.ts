import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//        *,*::after,*::before {
//             @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
//             font-family: 'SF Pro Display', sans-serif !important;
//             background-color: red;
//         }
// `;

const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
       *{
          font-family: 'SF Pro Display';
       }
       *,*::before,*::after{
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-size: 14px;
       }
`;

export default GlobalStyle;
