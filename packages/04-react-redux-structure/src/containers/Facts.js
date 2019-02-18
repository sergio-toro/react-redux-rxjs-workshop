// @flow
import { connect } from "react-redux";

import { fetchFacts, fetchFactsSuccess, fetchFactsError } from "../modules/facts";

import Facts from "../components/Facts";

const mapStateToProps = state => ({
  hasError: state.facts.hasError,
  isLoading: state.facts.isLoading,
  facts: state.facts.list
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

const FactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts);

export default FactsContainer;
