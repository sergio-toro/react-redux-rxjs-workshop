// @flow
import { connect } from "react-redux";

import { fetchFacts, setLambdaFunction, setFactsAmount, setAnimals } from "../modules/facts";
import Facts from "../components/Facts";

const mapStateToProps = state => ({
  hasError: state.facts.hasError,
  isLoading: state.facts.isLoading,
  facts: state.facts.list,
  amount: state.facts.amount,
  animals: state.facts.animals,
  lambdaFunction: state.facts.lambdaFunction
});

const mapDispatchToProps = {
  onRefreshFacts: fetchFacts,
  onAmountChanged: setFactsAmount,
  onLambdaFunctionChanged: setLambdaFunction,
  onAnimalsChanged: setAnimals
};

const FactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts);

export default FactsContainer;
