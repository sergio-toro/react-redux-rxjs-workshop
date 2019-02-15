// @flow

const FETCH_FACTS = "@APP/FETCH_FACTS";
const FETCH_FACTS_SUCCESS = "@APP/FETCH_FACTS_SUCCESS";
const FETCH_FACTS_ERROR = "@APP/FETCH_FACTS_ERROR";

export const fetchFacts = () => ({
  type: FETCH_FACTS
});

export const fetchFactsSuccess = facts => ({
  type: FETCH_FACTS_SUCCESS,
  payload: facts
});

export const fetchFactsError = () => ({
  type: FETCH_FACTS_ERROR
});

const initialState = {
  hasError: false,
  isLoading: false,
  facts: []
};

type State = {
  hasError: boolean,
  isLoading: boolean,
  facts: Object[]
};

export default function reducer(state: State = initialState, action) {
  switch (action.type) {
    case FETCH_FACTS:
      return {
        ...initialState,
        isLoading: true
      };

    case FETCH_FACTS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        facts: action.payload
      };

    case FETCH_FACTS_ERROR:
      return {
        ...initialState,
        hasError: true
      };
    default:
      return state;
  }
}
