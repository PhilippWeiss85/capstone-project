import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #22b1a4;
          --text-secondary: #ffffff;
          --text-tertiary: #044454;
          --background-primary: #050a19;
          --background-secondary: #044454;
          --background-tertiary: #b6cbbc;
          --background-navigation: #d9d9d9;

          /* --background-secondary: #b6cbbc; */
          --attention-color-primary: #ec0c53;
          --box-shadow: #ffffff;
          --background-true: hsla(141, 56%, 41%, 0.5);
          --background-false: hsla(10, 72%, 49%, 0.5);
          /* --background-formlabel: hsla(241, 91%, 13%, 0.2) */
          --background-forminput: #abc9c6;
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

      h1 {
        position: relative;
        font-size: 1.5em;
        text-align: center;
        padding: 1em 0;
        
    
      }

      h2 {
        position: relative;
        font-size: 1.2em;
        text-align: center;
        padding-bottom: 1em;
      }
  `;

export default GlobalStyle;
