import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
//import StoreContext from "../../../StoreContext";
import { MyPosts } from "./MyPosts";

/*const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onChangePost = (text) => {
          const action = updateNewPostActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onChangePost}
            addPost={addPost}
            postsData={state.profileReducer.posts}
            newPostText={state.profileReducer.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
*/

const mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (body) => {
      dispatch(updateNewPostActionCreator(body));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const SuperPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperPostsContainer;

//export default MyPostsContainer;
