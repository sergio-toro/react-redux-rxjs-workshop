import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

import { Fact } from "00-components";

const Logo = styled.img`
  width: 50px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo src={logo} alt="logo" />
          Cat facts
        </header>

        <Fact />
      </div>
    );
  }
}

export default App;
