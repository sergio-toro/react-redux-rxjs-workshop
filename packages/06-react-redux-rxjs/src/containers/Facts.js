// @flow
import { connect } from "react-redux";

import { fetchFacts } from "../modules/facts";
import Facts from "../components/Facts";

const mapStateToProps = state => ({
  hasError: state.facts.hasError,
  isLoading: state.facts.isLoading,
  facts: state.facts.list
});

const mapDispatchToProps = {
  onFetchFacts: fetchFacts
};

const FactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts);

export default FactsContainer;
