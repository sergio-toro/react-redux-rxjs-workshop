// @flow
import React from "react";
import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "00-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
  * {
    box-sizing: border-box;
  }
`;

GlobalStyle.defaultProps = {
  theme: defaultTheme
};

// Endpoint to fetch the data:
// https://kodify-workshop.netlify.com/.netlify/functions/facts?amount=6

const App = () => (
  <div>
    <GlobalStyle />
    Hello world
  </div>
);

export default App;
