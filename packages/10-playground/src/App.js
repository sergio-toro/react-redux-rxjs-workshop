// @flow
import React, { Fragment } from "react";
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

const App = () => (
  <Fragment>
    <GlobalStyle />
    Hello world
  </Fragment>
);

export default App;
