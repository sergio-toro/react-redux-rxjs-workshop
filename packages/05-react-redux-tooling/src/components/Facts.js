// @flow
import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { ErrorMessage, Button as BaseButton, Fact as BaseFact, Loading as BaseLoading } from "00-components";

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

class Facts extends Component<Props> {
  componentDidMount() {
    this.props.onFetchFacts();
  }

  render() {
    const { hasError, isLoading, facts, onFetchFacts } = this.props;
    return (
      <Fragment>
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

export default Facts;
