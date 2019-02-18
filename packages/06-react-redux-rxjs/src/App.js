// @flow
import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "00-components";

import FactsContainer from "./containers/Facts";

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
    <FactsContainer />
  </Fragment>
);

export default App;
