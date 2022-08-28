export const profileSelectors = {
  getProfile(state) {
    return state.profileReducer.profile;
  },
  getStatus(state) {
    return state.profileReducer.status;
  },
  getId(state) {
    return state.authReducer.id;
  },
};
