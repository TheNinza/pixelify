import { createGlobalStyle, css } from "styled-components";
import DancingScript from "../../fonts/DancingScript-VariableFont_wght.ttf";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Dancing-Script';
    src: url(${DancingScript}) format('truetype');
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    color: rgba(255, 255, 255, 1);


    /* removing text selection */

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
      200.96deg,
      #fedc2a -29.09%,
      #dd5789 51.77%,
      #7a2c9e 129.35%
    );
    height: 100vh;
  }

  #tsparticles {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  #root{
    height: 100%;
  }
`;

export const GlassMorphicRectangleCSS = css`
  /* Rectangle 4 */

  min-width: 153px;
  min-height: 169px;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 8px;

  border: 1px solid rgba(255, 255, 255, 0.5);
`;
