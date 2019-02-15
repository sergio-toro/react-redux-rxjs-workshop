// @flow
import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

import {
  ErrorMessage,
  Button as BaseButton,
  Fact as BaseFact,
  Loading as BaseLoading,
  SelectList as BaseSelectList,
  RadioList as BaseRadioList,
  CheckboxList as BaseCheckboxList,
  defaultTheme
} from "00-components";

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

const RadioList = styled(BaseRadioList)`
  padding-right: 20px;
  line-height: 40px;
`;

const CheckboxList = styled(BaseCheckboxList)`
  padding-right: 20px;
  line-height: 40px;
`;

const SelectList = styled(BaseSelectList)`
  line-height: 40px;
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
  amount: number,
  animals: Array<"cat" | "dog" | "snail" | "horse">,
  lambdaFunction: "facts" | "slow-facts",
  facts: Object[]
};
class App extends Component<any, State> {
  state = {
    hasError: false,
    isLoading: false,
    amount: 8,
    lambdaFunction: "facts",
    animals: ["cat"],
    facts: []
  };

  componentDidMount() {
    this.fetchFacts();
  }

  async fetchFacts() {
    try {
      this.setState({ isLoading: true });
      const { lambdaFunction, animals, amount } = this.state;
      const types = animals.join(",");
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

  onLambdaFunctionChanged = lambdaFunction => {
    this.setState({ lambdaFunction }, () => this.fetchFacts());
  };

  onAnimalsChanged = animals => {
    this.setState({ animals }, () => this.fetchFacts());
  };

  onAmountChanged = amount => {
    this.setState({ amount }, () => this.fetchFacts());
  };

  render() {
    const { hasError, isLoading, facts, lambdaFunction, animals, amount } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <header>
          <h1>Cat facts</h1>
        </header>

        <Button onClick={this.onFetchFacts}>Refresh Facts</Button>
        <RadioList
          title="Endpoint:"
          name="lambda"
          value={lambdaFunction}
          options={[{ value: "facts", text: "Facts" }, { value: "slow-facts", text: "Slow Facts" }]}
          onChange={this.onLambdaFunctionChanged}
        />
        <CheckboxList
          title="Animals:"
          name="animals"
          values={animals}
          options={[
            { value: "cat", text: "Cat" },
            { value: "dog", text: "Dog" },
            { value: "snail", text: "Snail" },
            { value: "horse", text: "Horse" }
          ]}
          onChange={this.onAnimalsChanged}
        />

        <SelectList
          title="Amount"
          name="amount"
          value={amount}
          options={[
            { value: 8, text: "8" },
            { value: 16, text: "16" },
            { value: 32, text: "32" },
            { value: 64, text: "64" }
          ]}
          onChange={this.onAmountChanged}
        />

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
