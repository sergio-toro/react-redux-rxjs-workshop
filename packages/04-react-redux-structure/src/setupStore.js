import { createStore, combineReducers } from "redux";
import facts from "./modules/facts";

export default function setupStore() {
  const rootReducer = combineReducers({ facts });
  return createStore(rootReducer);
}
