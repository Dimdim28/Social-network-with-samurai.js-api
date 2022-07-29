export const types = {
  F: "FOLLOW",
  UF: "UNFOLLOW",
  SU: "SET_USERS",
  SCP: "SET_CURRENT_PAGE",
  SUTC: "SET_USERS_TOTAL_COUNT",
};

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
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

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: types.F, userId });
export const unfollowActionCreator = (userId) => ({ type: types.UF, userId });
export const setUsersActionCreator = (users) => ({ type: types.SU, users });
export const setCurrentPageActionCreator = (currentPage) => ({
  type: types.SCP,
  currentPage,
});
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({
  type: types.SUTC,
  totalUsersCount,
});

export default usersReducer;
