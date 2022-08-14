import { profileAPI } from "../api/api";

const types = {
  AP: "ADD-POST",
  UNPT: "UPDATE-NEW-POST-TEXT",
  SUP: "SET-USER-PROFILE",
  SS: "SET-STATUS",
};

let initialState = {
  posts: [
    { message: "Hello everyone", likes: 16, id: 0 },
    { message: "Hi!", likes: 5, id: 1 },
    { message: " =)", likes: 0, id: 2 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AP: {
      const newPost = {
        id: state.posts.length,
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case types.UNPT: {
      return { ...state, newPostText: action.newText };
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

export const addPostActionCreator = () => ({ type: types.AP });
export const setUserProfile = (profile) => ({ type: types.SUP, profile });
export const setStatus = (status) => ({ type: types.SS, status });

export const updateNewPostActionCreator = (text) => ({
  type: types.UNPT,
  newText: text,
});

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((res) => {
    dispatch(setUserProfile(res.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((res) => {
    dispatch(setStatus(res.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((res) => {
    if (!res.data.resultCode) dispatch(setStatus(status));
  });
};

export default profileReducer;
