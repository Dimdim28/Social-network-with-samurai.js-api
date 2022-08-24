import appReducer, { initializedSuccess } from "./app-reducer";

const initialState = {
  initialized: false,
};

it("posts count should be incremented", () => {
  const action = initializedSuccess();
  const newState = appReducer(initialState, action);
  expect(newState.initialized).toBe(true);
});
