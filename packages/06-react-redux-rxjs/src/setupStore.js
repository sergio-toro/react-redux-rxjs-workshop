import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import facts, { factsEpic } from "./modules/facts";

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 50
});

export default function setupStore() {
  const rootEpic = combineEpics(factsEpic);
  const rootReducer = combineReducers({ facts });

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}
