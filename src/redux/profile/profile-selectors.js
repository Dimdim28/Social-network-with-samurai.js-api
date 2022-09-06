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
  getPosts(state) {
    return state.profileReducer.posts;
  },
  getSavePhotoError(state) {
    return state.profileReducer.savePhotoError;
  },
  getSaveProfileError(state) {
    return state.profileReducer.saveProfileError;
  },
  getProfileFetchingStatus(state) {
    return state.profileReducer.isFetching;
  },
};
