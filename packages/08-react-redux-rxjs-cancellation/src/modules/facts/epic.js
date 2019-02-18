import { of, concat } from "rxjs";
import { ajax } from "rxjs/ajax";
import { /* debounceTime,  */ takeUntil, mapTo, mergeMap, filter, map, catchError } from "rxjs/operators";
import { combineEpics } from "redux-observable";

import {
  FETCH_FACTS,
  SET_FACTS_LAMBDA_FUNCTION,
  SET_FACTS_AMOUNT,
  SET_FACTS_ANIMALS,
  fetchFacts,
  fetchFactsLoading,
  fetchFactsSuccess,
  fetchFactsError
} from "./index";

const BASE_URL = "https://kodify-workshop.netlify.com/.netlify/functions/";

function fetchEpic(action$, state$) {
  return action$.pipe(
    filter(action => action.type === FETCH_FACTS),
    // debounceTime(1250),
    mergeMap(() => {
      const loading$ = of(fetchFactsLoading());

      const { lambdaFunction, amount, animals } = state$.value.facts;
      const types = animals.join(",");
      const request$ = ajax.getJSON(`${BASE_URL}${lambdaFunction}?amount=${amount}&types=${types}`).pipe(
        map(data => fetchFactsSuccess(data)),
        takeUntil(action$.pipe(filter(action => action.type === FETCH_FACTS))),
        catchError(error => {
          console.error("Error loading facts", error);
          return of(fetchFactsError());
        })
      );
      return concat(loading$, request$);
    })
  );
}

function refreshEpic(action$) {
  return action$.pipe(
    filter(({ type }) => type === SET_FACTS_LAMBDA_FUNCTION || type === SET_FACTS_AMOUNT || type === SET_FACTS_ANIMALS),
    mapTo(fetchFacts())
  );
}

export default combineEpics(fetchEpic, refreshEpic);
