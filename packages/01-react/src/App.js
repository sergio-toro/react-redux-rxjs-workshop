import React, { Component } from "react";
import styled from "styled-components";

import { Fact } from "00-components";

class App extends Component {
  async componentDidMount() {
    try {
      const response = await fetch("https://kodify-workshop.netlify.com/.netlify/functions/facts", { credentials: "omit" });
      if (response.status === 200) {
        const data = await response.json();
        console.log("hello data!", data);
      }
    } catch (error) {
      console.log("error :/", error, error.message, error.stack);
    }
  }

  render() {
    return (
      <div>
        <header>Cat facts</header>
      </div>
    );
  }
}

export default App;
