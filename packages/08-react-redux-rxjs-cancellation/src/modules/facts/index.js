// @flow
export { default as factsEpic } from "./epic";

type FactsType = Object[];
type LambdaFunctionType = "facts" | "slow-facts";
type AnimalsType = Array<"cat" | "dog" | "snail" | "horse">;
type State = {
  hasError: boolean,
  isLoading: boolean,
  list: FactsType,
  amount: number,
  animals: AnimalsType,
  lambdaFunction: LambdaFunctionType
};

export const FETCH_FACTS = "@APP/FETCH_FACTS";
export const FETCH_FACTS_LOADING = "@APP/FETCH_FACTS_LOADING";
export const FETCH_FACTS_SUCCESS = "@APP/FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_ERROR = "@APP/FETCH_FACTS_ERROR";

export const SET_FACTS_LAMBDA_FUNCTION = "@APP/SET_FACTS_LAMBDA_FUNCTION";
export const SET_FACTS_AMOUNT = "@APP/SET_FACTS_AMOUNT";
export const SET_FACTS_ANIMALS = "@APP/SET_FACTS_ANIMALS";

export const fetchFacts = () => ({
  type: FETCH_FACTS
});

export const fetchFactsLoading = () => ({
  type: FETCH_FACTS_LOADING
});

export const fetchFactsSuccess = (facts: FactsType) => ({
  type: FETCH_FACTS_SUCCESS,
  payload: facts
});

export const fetchFactsError = () => ({
  type: FETCH_FACTS_ERROR
});
export const setLambdaFunction = (lambdaFunction: LambdaFunctionType) => ({
  type: SET_FACTS_LAMBDA_FUNCTION,
  payload: lambdaFunction
});

export const setFactsAmount = (animals: AnimalsType) => ({
  type: SET_FACTS_AMOUNT,
  payload: animals
});

export const setAnimals = (amount: number) => ({
  type: SET_FACTS_ANIMALS,
  payload: amount
});

const initialState = {
  hasError: false,
  isLoading: false,
  list: [],
  amount: 8,
  lambdaFunction: "facts",
  animals: ["cat"]
};

export default function reducer(state: State = initialState, action: any) {
  switch (action.type) {
    case FETCH_FACTS_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        list: []
      };

    case FETCH_FACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        list: action.payload
      };

    case FETCH_FACTS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        list: []
      };

    case SET_FACTS_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };

    case SET_FACTS_ANIMALS:
      return {
        ...state,
        animals: action.payload
      };

    case SET_FACTS_LAMBDA_FUNCTION:
      return {
        ...state,
        lambdaFunction: action.payload
      };

    default:
      return state;
  }
}
