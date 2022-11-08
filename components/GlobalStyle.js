import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #4D4D4D; // p tags etc --> dark
          --text-secondary: #ffffff; // content headline --> white
          --text-navigation: #BBF244; // light yellow
          --background-primary: #F0F7F5; // white/grey
          --background-secondary:#E6EDEB; // cardcontainer color
          --background-tertiary: #b6cbbc; // grey
          --background-navigation: #012340; // darkblue
          --attention-color-primary: #ec0c53; // red
        
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
