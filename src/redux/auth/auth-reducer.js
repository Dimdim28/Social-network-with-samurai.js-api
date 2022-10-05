import { authAPI, securityAPI } from "../../api/api";

export const types = {
  SUD: "SET_USER_DATA",
  SLE: "SET_LOGIN_ERROR",
  DUD: "DELETE_USER_DATA",
  SCU: "SET_CAPTCHA_URL",
};

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  loginError: null,
  captchaUrl: null,
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

    case types.SLE: {
      return {
        ...state,
        loginError: action.error,
      };
    }

    case types.DUD: {
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false,
        captchaUrl: null,
      };
    }

    case types.SCU: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

export const setLoginError = (error) => ({ type: types.SLE, error });

export const setCaptchaUrl = (captchaUrl) => ({ type: types.SCU, captchaUrl });

export const authMe = () => async (dispatch) => {
  const res = await authAPI.authMe();
  if (res.data.resultCode === 0) {
    const { id, email, login } = res.data.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export const exit = () => async (dispatch) => {
  const res = await authAPI.exit();
  if (res.data.resultCode === 0) dispatch(setEmptyUserData());
};

export const getLoginUserData = (data) => async (dispatch) => {
  const { email, password, rememberMe, captcha } = data;
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) dispatch(authMe());
  else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    dispatch(setLoginError(response.data.messages[0]));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};
export default authReducer;
