import { connect } from "react-redux";
import { compose } from "redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { profileSelectors } from "../../../redux/profile-selectors";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postsData: profileSelectors.getPosts(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => {
      dispatch(addPostActionCreator(data));
    },
  };
};

const SuperPostsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);

export default SuperPostsContainer;
