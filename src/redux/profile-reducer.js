const types = {
  AP: "ADD-POST",
  UNPT: "UPDATE-NEW-POST-TEXT",
};

let initialState = {
  posts: [
    { message: "Hello everyone", likes: 16, id: 0 },
    { message: "Hi!", likes: 5, id: 1 },
    { message: " =)", likes: 0, id: 2 },
  ],
  newPostText: "",
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

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: types.AP });
export const updateNewPostActionCreator = (text) => ({
  type: types.UNPT,
  newText: text,
});

export default profileReducer;
