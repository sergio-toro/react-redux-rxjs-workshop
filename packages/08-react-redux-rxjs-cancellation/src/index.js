import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import setupStore from "./setupStore";
import App from "./App";

ReactDOM.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
