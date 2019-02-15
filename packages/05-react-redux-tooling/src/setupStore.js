import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import facts from "./modules/facts";

export default function setupStore() {
  const rootReducer = combineReducers({ facts });
  return createStore(rootReducer, devToolsEnhancer());
}
