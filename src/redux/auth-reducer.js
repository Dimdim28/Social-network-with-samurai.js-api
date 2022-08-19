import { authAPI } from "../api/api";

export const types = {
  SUD: "SET_USER_DATA",
  SIF: "SET_IS_FETCHING",
  SE: "SET_ERROR",
  DUD: "DELETE_USER_DATA",
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUD: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    case types.SE: {
      return {
        ...state,
        error: action.error,
      };
    }

    case types.DUD: {
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: types.SUD,
  data: { id, email, login },
});

export const setEmptyUserData = () => ({
  type: types.DUD,
});

const setError = (error) => ({ type: types.SE, error });

export const authMe = () => (dispatch) => {
  return authAPI.authMe().then((res) => {
    if (res.data.resultCode === 0) {
      const { id, email, login } = res.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export const exit = () => (dispatch) => {
  authAPI.exit().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setEmptyUserData());
    }
  });
};

export const getLoginUserData = (data) => (dispatch) => {
  const { email, password, rememberMe } = data;
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authMe());
    } else {
      dispatch(setError(response.data.messages[0]));
    }
  });
};

export default authReducer;
