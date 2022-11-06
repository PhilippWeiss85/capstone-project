import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #808080; // p tags etc
          --text-secondary: #ffffff; // content headline
          --text-tertiary: #4D4D4D; // navigation
          --text-navigation: #BBF244;
          --background-primary: #F0F7F5; //like white/grey
          --background-secondary:#E6EDEB;
          --background-tertiary: #b6cbbc;
          --background-navigation: #012340;
          --background-navgation-active: #ffffff;
          --attention-color-primary: #ec0c53;
          --box-shadow: #ffffff;
          --background-true: hsla(141, 56%, 41%, 0.5);
          --background-false: hsla(10, 72%, 49%, 0.5);
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
          
          border-radius: 5px;
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
          margin: 0 0 70px 0;
      }

      h1 {
        position: relative;
        font-size: 1.5em;
        text-align: center;
        padding: 0 0;
        
    
      }

      h2 {
        position: relative;
        font-size: 1.2em;
        text-align: center;
        padding-bottom: 1em;
      }
  `;

export default GlobalStyle;
