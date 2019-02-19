import { TestScheduler } from "rxjs/testing";
import { ajax } from "rxjs/ajax";

import factsEpic from "./epic";
import {
  SET_FACTS_LAMBDA_FUNCTION,
  SET_FACTS_AMOUNT,
  SET_FACTS_ANIMALS,
  fetchFacts,
  fetchFactsLoading,
  fetchFactsSuccess,
  setLambdaFunction,
  setFactsAmount,
  setAnimals
} from "./index";

jest.mock("rxjs/ajax", () => ({
  ajax: {
    getJSON: jest.fn()
  }
}));

const state$ = {
  value: {
    facts: {
      amount: 5,
      lambdaFunction: "facts",
      animals: ["cat", "dog"]
    }
  }
};

describe("factsEpic", () => {
  let testScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe("fetchEpic", () => {
    it("fetchs data on FETCH_FACTS", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = hot("-a", {
          a: fetchFacts()
        });

        ajax.getJSON.mockReturnValue(
          cold("10ms -d", {
            d: "results"
          })
        );

        const output$ = factsEpic(action$, state$);
        expectObservable(output$).toBe("-l 10ms r", {
          l: fetchFactsLoading(),
          r: fetchFactsSuccess("results")
        });
      });
    });

    it("cancels previous request when new FETCH_FACTS action is fired", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = hot("-a 5ms -a", {
          a: fetchFacts()
        });

        ajax.getJSON.mockReturnValue(
          cold("10ms -d", {
            d: "results"
          })
        );

        const output$ = factsEpic(action$, state$);
        expectObservable(output$).toBe("-l 5ms -l 10ms r", {
          l: fetchFactsLoading(),
          r: fetchFactsSuccess("results")
        });
      });
    });
  });

  describe("refreshEpic", () => {
    [SET_FACTS_LAMBDA_FUNCTION, SET_FACTS_AMOUNT, SET_FACTS_ANIMALS].forEach(type => {
      it(`fires FETCH_FACTS after ${type} called`, () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = hot("-a", {
            a: { type }
          });

          const output$ = factsEpic(action$, state$);
          expectObservable(output$).toBe("- 750ms r", {
            r: fetchFacts()
          });
        });
      });
    });

    it("debopunces firing FETCH_FACTS after update actions are called", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = hot("-a 500ms b 320ms c 100ms b", {
          a: setLambdaFunction(),
          b: setFactsAmount(),
          c: setAnimals()
        });

        const output$ = factsEpic(action$, state$);
        expectObservable(output$).toBe("- 500ms - 320ms - 100ms - 750ms r", {
          r: fetchFacts()
        });
      });
    });
  });
});
