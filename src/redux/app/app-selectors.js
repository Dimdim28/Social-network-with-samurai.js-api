export const appSelectors = {
  getInitialized(state) {
    return state.appReducer.initialized;
  },
  getServerError(state) {
    return state.appReducer.serverError;
  },
};
