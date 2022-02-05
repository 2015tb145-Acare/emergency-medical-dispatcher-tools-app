import { createGlobalStyle } from "styled-components/macro";
import theme from "./theme";

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }

  body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    background-color: ${colors.darkGrey};
    color: ${colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.025em;
    margin: 0 0 10px;
    color: inherit;
  }

  h1, h2, h3 {
    font-weight: 900;
  }

  h4, h5, h6 {
    font-weight: 700;
  }

  p {
    margin: 0 0 10px;
  }

  [type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
  }
`;

export default GlobalStyle;
