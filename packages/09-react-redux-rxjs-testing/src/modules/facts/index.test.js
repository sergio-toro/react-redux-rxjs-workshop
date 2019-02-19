import factsReducer, {
  FETCH_FACTS_LOADING,
  FETCH_FACTS_SUCCESS,
  SET_FACTS_LAMBDA_FUNCTION,
  SET_FACTS_AMOUNT,
  SET_FACTS_ANIMALS
} from "./index";

describe("factsReducer", () => {
  it("sets isLoading as loading", () => {
    const action = { type: FETCH_FACTS_LOADING };
    const state = { list: [1, 2, 3], hasError: true };
    const output = factsReducer(state, action);

    expect(output.isLoading).toBe(true);
    expect(output.hasError).toBe(false);
    expect(output.list).toEqual([]);
  });

  it("sets list=[1,2,3] and isLoading=false", () => {
    const action = { type: FETCH_FACTS_SUCCESS, payload: [1, 2, 3] };
    const state = { list: [1, 2, 3], hasError: true };
    const output = factsReducer(state, action);

    expect(output.isLoading).toBe(false);
    expect(output.list).toEqual([1, 2, 3]);
  });

  it("sets amount", () => {
    const action = { type: SET_FACTS_AMOUNT, payload: 54 };
    const output = factsReducer(undefined, action);

    expect(output.amount).toBe(54);
  });

  it("sets lambdaFunction", () => {
    const action = { type: SET_FACTS_LAMBDA_FUNCTION, payload: "slow" };
    const output = factsReducer(undefined, action);

    expect(output.lambdaFunction).toBe("slow");
  });

  it("sets animals", () => {
    const action = { type: SET_FACTS_ANIMALS, payload: ["cat", "dog"] };
    const output = factsReducer(undefined, action);

    expect(output.animals).toEqual(["cat", "dog"]);
  });
});
