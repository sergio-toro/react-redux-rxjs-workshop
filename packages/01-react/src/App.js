// @flow
import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { ErrorMessage, Button, Fact as BaseFact, Loading as BaseLoading, defaultTheme } from "00-components";

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

const Title = styled.h1`
  display: inline-block;
`;

const LambdaChoice = styled.div`
  display: inline-block;
  padding-left: 50px;
  label {
    margin-left: 10px;
  }
`;

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
`;

const Fact = styled(BaseFact)`
  margin-bottom: 10px;
  flex-basis: 100%;

  @media (min-width: 1024px) {
    flex-basis: calc(50% - 5px);
  }
`;

const Loading = styled(BaseLoading)`
  margin: 50px auto 0;
`;

type State = {
  hasError: boolean,
  isLoading: boolean,
  lambdaFunction: "facts" | "slow-facts",
  facts: Object[]
};
class App extends Component<any, State> {
  state = {
    hasError: false,
    isLoading: false,
    lambdaFunction: "facts",
    facts: []
  };

  componentDidMount() {
    this.fetchFacts();
  }

  async fetchFacts() {
    try {
      this.setState({ isLoading: true });
      const { lambdaFunction } = this.state;
      const amount = 8;
      const types = "cat,dog,snail,horse";
      const response = await fetch(
        `https://kodify-workshop.netlify.com/.netlify/functions/${lambdaFunction}?amount=${amount}&types=${types}`
      );
      if (response.status === 200) {
        const facts = await response.json();
        this.setState({ facts, isLoading: false, hasError: false });
      }
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  onFetchFacts = () => {
    this.fetchFacts();
  };

  onLambdaFunctionChanged = event => {
    this.setState({ lambdaFunction: event.target.value }, () => this.fetchFacts());
  };

  render() {
    const { hasError, isLoading, facts, lambdaFunction } = this.state;
    return (
      <div>
        <GlobalStyle />
        <header>
          <Title>Cat facts</Title>
          <LambdaChoice>
            Endpoint:
            <label>
              <input
                type="radio"
                name="lambda"
                value="facts"
                checked={lambdaFunction === "facts"}
                onChange={this.onLambdaFunctionChanged}
              />
              &nbsp; Facts
            </label>
            <label>
              <input
                type="radio"
                name="lambda"
                value="slow-facts"
                checked={lambdaFunction === "slow-facts"}
                onChange={this.onLambdaFunctionChanged}
              />
              &nbsp; Slow Facts
            </label>
          </LambdaChoice>
        </header>

        <Button onClick={this.onFetchFacts}>Refresh Facts</Button>
        <Results>
          {hasError && <ErrorMessage>Error while fetching facts, try again later</ErrorMessage>}
          {isLoading && <Loading size={100} />}
          {!isLoading && facts.map(fact => <Fact key={fact._id} text={fact.text} type={fact.type} />)}
        </Results>
      </div>
    );
  }
}

export default App;
