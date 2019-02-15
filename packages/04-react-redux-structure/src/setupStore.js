import { createStore, combineReducers } from "redux";
import facts from "./modules/facts";

export default function setupStore() {
  return createStore(combineReducers({ facts }));
}
