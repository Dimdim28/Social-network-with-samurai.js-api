import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/redux-store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
