// @flow

const FETCH_FACTS = "@APP/FETCH_FACTS";
const FETCH_FACTS_SUCCESS = "@APP/FETCH_FACTS_SUCCESS";
const FETCH_FACTS_ERROR = "@APP/FETCH_FACTS_ERROR";

type FactsType = Object[];
type State = {
  hasError: boolean,
  isLoading: boolean,
  list: FactsType
};

export const fetchFacts = () => ({
  type: FETCH_FACTS
});

export const fetchFactsSuccess = (facts: FactsType) => ({
  type: FETCH_FACTS_SUCCESS,
  payload: facts
});

export const fetchFactsError = () => ({
  type: FETCH_FACTS_ERROR
});

const initialState = {
  hasError: false,
  isLoading: false,
  list: []
};

export default function reducer(state: State = initialState, action: any) {
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
        list: action.payload
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
