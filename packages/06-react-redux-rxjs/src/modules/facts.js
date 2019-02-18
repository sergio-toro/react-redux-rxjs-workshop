// @flow
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap, filter, map, catchError } from "rxjs/operators";

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

export function factsEpic(action$) {
  return action$.pipe(
    filter(action => action.type === FETCH_FACTS),
    mergeMap(() => {
      const request$ = ajax.getJSON(`https://kodify-workshop.netlify.com/.netlify/functions/facts?amount=6`).pipe(
        map(data => fetchFactsSuccess(data)),
        catchError(error => {
          console.error("Error loading facts", error);
          return of(fetchFactsError());
        })
      );

      return request$;
    })
  );
}

const initialState = {
  hasError: false,
  isLoading: false,
  list: []
};

type State = {
  hasError: boolean,
  isLoading: boolean,
  list: Object[]
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
