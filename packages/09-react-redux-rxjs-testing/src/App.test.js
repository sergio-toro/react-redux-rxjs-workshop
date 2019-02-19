import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "./App";

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  facts: {
    hasError: false,
    isLoading: false,
    list: []
  }
};
const store = mockStore(initialState);

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
