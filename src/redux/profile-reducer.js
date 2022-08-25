import { profileAPI } from "../api/api";

const types = {
  AP: "ADD-POST",
  DP: "DELETE-POST",
  SUP: "SET-USER-PROFILE",
  SS: "SET-STATUS",
};

let initialState = {
  posts: [
    { message: "Hello everyone", likes: 16, id: 0 },
    { message: "Hi!", likes: 5, id: 1 },
    { message: " =)", likes: 0, id: 2 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AP: {
      const newPost = {
        id: state.posts.length,
        message: action.newText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }

    case types.DP: {
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.id)],
        newPostText: "",
      };
    }

    case types.SUP: {
      return { ...state, profile: action.profile };
    }

    case types.SS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const deletePostActionCreator = (data) => ({
  type: types.DP,
  id: data.id,
});

export const addPostActionCreator = (data) => ({
  type: types.AP,
  newText: data.newText,
});

export const setUserProfile = (profile) => ({ type: types.SUP, profile });
export const setStatus = (status) => ({ type: types.SS, status });

export const getProfile = (userId) => async (dispatch) => {
  const res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status);
  if (!res.data.resultCode) dispatch(setStatus(status));
};

export default profileReducer;
