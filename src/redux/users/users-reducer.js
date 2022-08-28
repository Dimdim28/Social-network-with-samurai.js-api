import { usersAPI } from "../../api/api";
import Followinghelpers from "../../helpers/FollowingHelpers";

export const types = {
  F: "FOLLOW",
  UF: "UNFOLLOW",
  SU: "SET_USERS",
  SCP: "SET_CURRENT_PAGE",
  SUTC: "SET_USERS_TOTAL_COUNT",
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
      return Followinghelpers.changeFollowngStatus(state, action.userId, true);
    }

    case types.UF: {
      return Followinghelpers.changeFollowngStatus(state, action.userId, false);
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
      return Followinghelpers.changeFollowingStatus(state, action);
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: types.F, userId });
export const unfollowSuccess = (userId) => ({ type: types.UF, userId });
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

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount));
};

const following = async function (userId, dispatch, apiAction, successAction) {
  dispatch(setFollowingProgress(true, userId));
  const res = await usersAPI[apiAction](userId);
  if (res.data.resultCode === 0) dispatch(successAction(userId));
  dispatch(setFollowingProgress(false, userId));
};

export const follow = (userId) => (dispatch) => {
  following(userId, dispatch, "follow", followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
  following(userId, dispatch, "unfollow", unfollowSuccess);
};

export default usersReducer;
