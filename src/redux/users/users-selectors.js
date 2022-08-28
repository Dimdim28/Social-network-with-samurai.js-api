export const usersSelectors = {
  getUsers(state) {
    return state.usersReducer.users;
  },
  getPageSize(state) {
    return state.usersReducer.pageSize;
  },
  getTotalUsersCount(state) {
    return state.usersReducer.totalUsersCount;
  },
  getCurrentPage(state) {
    return state.usersReducer.currentPage;
  },
  getIsFetching(state) {
    return state.usersReducer.isFetching;
  },
  getFollowingProgress(state) {
    return state.usersReducer.followingProgress;
  },
};
