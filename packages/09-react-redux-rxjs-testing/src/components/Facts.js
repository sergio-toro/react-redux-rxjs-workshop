// @flow
import React, { Component, Fragment } from "react";
import styled from "styled-components";

import {
  ErrorMessage,
  Button as BaseButton,
  Fact as BaseFact,
  Loading as BaseLoading,
  SelectList as BaseSelectList,
  RadioList as BaseRadioList,
  CheckboxList as BaseCheckboxList
} from "00-components";

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

const LAMBDA_FUNCTION_OPTIONS = [{ value: "facts", text: "Facts" }, { value: "slow-facts", text: "Slow Facts" }];
const AMOUNT_OPTIONS = [
  { value: 8, text: "8" },
  { value: 16, text: "16" },
  { value: 32, text: "32" },
  { value: 64, text: "64" }
];
const ANIMALS_OPTIONS = [
  { value: "cat", text: "Cat" },
  { value: "dog", text: "Dog" },
  { value: "snail", text: "Snail" },
  { value: "horse", text: "Horse" }
];

type Props = {
  hasError: boolean,
  isLoading: boolean,
  facts: Object[],
  amount: number,
  animals: Array<"cat" | "dog" | "snail" | "horse">,
  lambdaFunction: "facts" | "slow-facts",
  onFetchFacts: Function,
  onAmountChanged: Function,
  onLambdaFunctionChanged: Function,
  onAnimalsChanged: Function
};

class Facts extends Component<Props> {
  componentDidMount() {
    this.props.onFetchFacts();
  }

  render() {
    const {
      hasError,
      isLoading,
      facts,
      amount,
      animals,
      lambdaFunction,
      onFetchFacts,
      onAmountChanged,
      onLambdaFunctionChanged,
      onAnimalsChanged
    } = this.props;
    return (
      <Fragment>
        <header>
          <h1>Cat facts</h1>
        </header>

        <Button onClick={onFetchFacts}>Refresh Facts</Button>
        <RadioList
          title="Endpoint:"
          name="lambda"
          value={lambdaFunction}
          options={LAMBDA_FUNCTION_OPTIONS}
          onChange={onLambdaFunctionChanged}
        />
        <CheckboxList
          title="Animals:"
          name="animals"
          values={animals}
          options={ANIMALS_OPTIONS}
          onChange={onAnimalsChanged}
        />

        <SelectList title="Amount" name="amount" value={amount} options={AMOUNT_OPTIONS} onChange={onAmountChanged} />

        <Results>
          {hasError && <ErrorMessage>Error while fetching facts, try again later</ErrorMessage>}
          {isLoading && <Loading size={100} />}
          {!isLoading && facts.map(fact => <Fact key={fact._id} text={fact.text} type={fact.type} />)}
        </Results>
      </Fragment>
    );
  }
}

export default Facts;
