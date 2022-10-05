export const authSelectors = {
  getIsAuth(state) {
    return state.authReducer.isAuth;
  },
  getLogin(state) {
    return state.authReducer.login;
  },
  getId(state) {
    return state.authReducer.id;
  },
  getEmail(state) {
    return state.authReducer.email;
  },
  getLoginError(state) {
    return state.authReducer.loginError;
  },
  getCaptcha(state) {
    return state.authReducer.captchaUrl;
  },
};
