import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.component";

import store from "redux/store";

it("renders without crashing", () => {
  // Mocks location.assign
  window.location.assign = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
