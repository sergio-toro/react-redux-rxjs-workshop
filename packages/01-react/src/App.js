// @flow
import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { ErrorMessage, Button as BaseButton, Fact as BaseFact, Loading as BaseLoading, defaultTheme } from "00-components";

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

const Button = styled(BaseButton)`
  margin-left: 0;
  margin-right: 20px;
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
  facts: Object[]
};
class App extends Component<any, State> {
  state = {
    hasError: false,
    isLoading: false,
    facts: []
  };

  componentDidMount() {
    this.fetchFacts();
  }

  async fetchFacts() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(`https://kodify-workshop.netlify.com/.netlify/functions/facts?amount=6`);
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

  render() {
    const { hasError, isLoading, facts } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <header>
          <h1>Cat facts</h1>
        </header>

        <Button onClick={this.onFetchFacts}>Refresh Facts</Button>

        <Results>
          {hasError && <ErrorMessage>Error while fetching facts, try again later</ErrorMessage>}
          {isLoading && <Loading size={100} />}
          {!isLoading && facts.map(fact => <Fact key={fact._id} text={fact.text} type={fact.type} />)}
        </Results>
      </Fragment>
    );
  }
}

export default App;
