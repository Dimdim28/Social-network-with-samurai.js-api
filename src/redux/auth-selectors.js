export const authSelectors = {
  getisAuth(state) {
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
  getError(state) {
    return state.authReducer.error;
  },
};
