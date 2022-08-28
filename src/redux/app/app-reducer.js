import { authMe } from "../auth/auth-reducer";

export const types = {
  SI: "SET_INITIALIZED",
};

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SI: {
      return {
        ...state,
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

export const initializeApp = () => (dispatch) => {
  dispatch(authMe()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
