import authReducer, {
  setAuthUserData,
  setEmptyUserData,
  setError,
} from "./auth-reducer";

const initialState = {
  id: 1,
  email: "test@gmail.com",
  login: "testLogin_1",
  isAuth: false,
  error: null,
};

const secondUserData = [2, "newtest@gmail.com", "testlogin2"];

it("after setting user data isAuth should be true", () => {
  const action = setAuthUserData(...secondUserData);
  const newState = authReducer(initialState, action);
  expect(newState.isAuth).toBe(true);
});

it("after setting user data email should be updated correctly", () => {
  const action = setAuthUserData(...secondUserData);
  const newState = authReducer(initialState, action);
  expect(newState.email).toBe("newtest@gmail.com");
});

it("after setting user data id should be updated correctly", () => {
  const action = setAuthUserData(...secondUserData);
  const newState = authReducer(initialState, action);
  expect(newState.id).toBe(2);
});

it("after setting user data login should be updated correctly", () => {
  const action = setAuthUserData(...secondUserData);
  const newState = authReducer(initialState, action);
  expect(newState.login).toBe("testlogin2");
});

it("after setting empty user data id should be equal null", () => {
  const action = setEmptyUserData();
  const newState = authReducer(initialState, action);
  expect(newState.id).toBe(null);
});

it("after setting empty user data email should be equal null", () => {
  const action = setEmptyUserData();
  const newState = authReducer(initialState, action);
  expect(newState.email).toBe(null);
});

it("after setting empty user data login should be equal null", () => {
  const action = setEmptyUserData();
  const newState = authReducer(initialState, action);
  expect(newState.login).toBe(null);
});

it("after setting empty user data isAuth should be equal false", () => {
  const action = setEmptyUserData();
  const newState = authReducer(initialState, action);
  expect(newState.isAuth).toBe(false);
});

it("error message should be correct after setting error", () => {
  const action = setError("error-message");
  const newState = authReducer(initialState, action);
  expect(newState.error).toBe("error-message");
});
