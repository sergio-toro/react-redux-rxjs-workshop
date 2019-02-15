// @flow
import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import { ErrorMessage, Button as BaseButton, Fact as BaseFact, Loading as BaseLoading, defaultTheme } from "00-components";

import { fetchFacts, fetchFactsSuccess, fetchFactsError } from "./modules/app";

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

type Props = {
  hasError: boolean,
  isLoading: boolean,
  facts: Object[]
};

class App extends Component<Props> {
  componentDidMount() {
    this.props.onFetchFacts();
  }

  render() {
    const { hasError, isLoading, facts, onFetchFacts } = this.props;
    return (
      <Fragment>
        <GlobalStyle />
        <header>
          <h1>Cat facts</h1>
        </header>

        <Button onClick={onFetchFacts}>Refresh Facts</Button>

        <Results>
          {hasError && <ErrorMessage>Error while fetching facts, try again later</ErrorMessage>}
          {isLoading && <Loading size={100} />}
          {!isLoading && facts.map(fact => <Fact key={fact._id} text={fact.text} type={fact.type} />)}
        </Results>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  hasError: state.hasError,
  isLoading: state.isLoading,
  facts: state.facts
});

const mapDispatchToProps = dispatch => ({
  async onFetchFacts() {
    try {
      dispatch(fetchFacts());
      const response = await fetch(`https://kodify-workshop.netlify.com/.netlify/functions/facts?amount=6`);
      if (response.status === 200) {
        const facts = await response.json();
        dispatch(fetchFactsSuccess(facts));
      }
    } catch (error) {
      dispatch(fetchFactsError());
    }
  }
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
