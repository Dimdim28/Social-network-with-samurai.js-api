export const types = {
  F: "FOLLOW",
  UF: "UNFOLLOW",
  SU: "SET_USERS",
  SCP: "SET_CURRENT_PAGE",
  SUTC: "SET_USERS_TOTAL_COUNT",
  NP: "NEXT_PAGE",
  PP: "PREVIOUS_PAGE",
  SIF: "SET_IS_FETCHING",
  SFP: "SET_FOLLOWING_PROGRESS",
};

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.F: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return { ...user, followed: true };
          return user;
        }),
      };
    }

    case types.UF: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return { ...user, followed: false };
          return user;
        }),
      };
    }

    case types.SU: {
      return { ...state, users: [...action.users] };
    }

    case types.SCP: {
      return { ...state, currentPage: action.currentPage };
    }

    case types.SUTC: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case types.SIF: {
      return { ...state, isFetching: action.isFetching };
    }

    case types.SFP: {
      return {
        ...state,
        followingProgress: action.followingProgress
          ? [...state.followingProgress, action.userId]
          : [state.followingProgress.filter((id) => id !== action.userId)],
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: types.F, userId });
export const unfollow = (userId) => ({ type: types.UF, userId });
export const setUsers = (users) => ({ type: types.SU, users });
export const setCurrentPage = (currentPage) => ({
  type: types.SCP,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: types.SUTC,
  totalUsersCount,
});

export const setIsFetching = (isFetching) => ({
  type: types.SIF,
  isFetching,
});

export const setFollowingProgress = (followingProgress, userId) => ({
  type: types.SFP,
  followingProgress,
  userId,
});

export default usersReducer;
