import { profileAPI } from "../../api/api";

const types = {
  AP: "ADD-POST",
  DP: "DELETE-POST",
  SUP: "SET-USER-PROFILE",
  SS: "SET-STATUS",
  SPS: "SAVE-PHOTO-SUCCESS",
  SPE: "SAVE-PHOTO-ERROR",
  SPRE: "SAVE-PROFILE-ERROR",
  SPIF: "SET-PROFILE-IS-FETCHING",
};

let initialState = {
  posts: [
    { message: "Hello everyone", likes: 16, id: 0 },
    { message: "Hi!", likes: 5, id: 1 },
    { message: " =)", likes: 0, id: 2 },
  ],
  profile: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: {
      small: null,
      large: null,
    },
  },
  status: "",
  savePhotoError: null,
  saveProfileError: null,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AP: {
      const newPost = {
        id: state.posts.length,
        message: action.newText,
        likes: 0,
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

    case types.SPS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }

    case types.SPE: {
      return {
        ...state,
        savePhotoError: action.savePhotoError,
      };
    }

    case types.SPRE: {
      return {
        ...state,
        saveProfileError: action.saveProfileError,
      };
    }

    case types.SPIF: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
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

export const savePhotoSuccess = (photos) => ({ type: types.SPS, photos });

export const savePhotoError = (savePhotoError) => {
  return {
    type: types.SPE,
    savePhotoError,
  };
};

export const saveProfileError = (saveProfileError) => {
  return {
    type: types.SPRE,
    saveProfileError,
  };
};

export const setFetchingStatus = (isFetching) => ({
  type: types.SPIF,
  isFetching,
});

export const setUserProfile = (profile) => ({ type: types.SUP, profile });
export const setStatus = (status) => ({ type: types.SS, status });

export const getProfile = (userId) => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  const res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res.data));
  dispatch(setFetchingStatus(false));
};

export const getStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status);
  if (!res.data.resultCode) dispatch(setStatus(status));
};

export const savePhoto = (file) => async (dispatch) => {
  const res = await profileAPI.savePhoto(file);
  if (!res.data.resultCode) {
    dispatch(savePhotoSuccess(res.data.data.photos));
    dispatch(savePhotoError(null));
  }
  if (res.data.resultCode === 1) dispatch(savePhotoError(res.data.messages[0]));
};

export const saveProfile = (profile) => async (dispatch) => {
  const res = await profileAPI.saveProfile(profile);
  if (!res.data.resultCode) {
    await dispatch(getProfile(profile.userId));
  } else {
    const message = res.data.messages[0];
    dispatch(saveProfileError(message));
    return Promise.reject(message);
  }
};

export const removeProfileError = () => (dispatch) => {
  dispatch(saveProfileError(null));
};

export default profileReducer;
