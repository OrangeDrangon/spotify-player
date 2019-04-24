import React from "react";
import ReactDOM from "react-dom";

import App from "./App.component";

it("renders without crashing", () => {
  // Mocks location.assign
  window.location.assign = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
