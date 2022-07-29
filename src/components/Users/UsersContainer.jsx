import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersTotalCountActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalCount: (totalUsersCount) => {
      dispatch(setUsersTotalCountActionCreator(totalUsersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
