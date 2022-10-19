import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #0c2c4d;
          --background-primary: #edf0f5;
          --background-secondary: #ADE856;
          --box-shadow: hsla(241, 91%, 13%, 0.5);
          --background-true: hsla(141, 56%, 41%, 0.5);
          --background-false: hsla(10, 72%, 49%, 0.5);
      }

      /* noto-sans-regular - latin */
        @font-face 
      {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
  
      * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border-radius: 5px;
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
          

      }
  `;

export default GlobalStyle;
