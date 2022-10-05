import { timeout } from "../../helpers/promiseHelpers";
import { authMe } from "../auth/auth-reducer";

export const types = {
  SI: "SET_INITIALIZED",
  SSE: "SET_SERVER_ERROR",
};

let initialState = {
  initialized: false,
  serverError: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SI: {
      return {
        ...state,
        initialized: true,
      };
    }

    case types.SSE: {
      return {
        ...state,
        serverError: action.error,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: types.SI,
});

export const setServerError = (error) => ({ type: types.SSE, error });

export const initializeApp = () => (dispatch) => {
  timeout(
    5000,
    dispatch(authMe()).then(() => {
      dispatch(initializedSuccess());
    })
  ).catch((err) => dispatch(setServerError(true)));
};

export default appReducer;
