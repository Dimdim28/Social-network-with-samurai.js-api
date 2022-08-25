const Followinghelpers = {
  changeFollowngStatus: (state, userId, status) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === userId) return { ...user, followed: status };
      return user;
    }),
  }),
  changeFollowingStatus: (state, action) => ({
    ...state,
    followingProgress: action.followingProgress
      ? [...state.followingProgress, action.userId]
      : state.followingProgress.filter((id) => id !== action.userId),
  }),
};

export default Followinghelpers;
