import { connect } from "react-redux";
import React from "react";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setUsers,
  setUsersTotalCount,
  unfollow,
  setFollowingProgress,
} from "../../redux/users-reducer";

import { Users } from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingProgress: state.usersReducer.followingProgress,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPage(pageNumber));
//     },
//     setTotalCount: (totalUsersCount) => {
//       dispatch(setUsersTotalCount(totalUsersCount));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetching(isFetching));
//     },
//   };
// };

class UsersContainer extends React.Component {
  pageChanging = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.setIsFetching(false);
    });
  };

  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  // onPageChanged = (pageNumber) => {
  //   this.props.setCurrentPage(pageNumber);
  //   axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
  //     )
  //     .then((res) => {
  //       this.props.setUsers(res.data.items);
  //     });
  // };

  nextPage = (pageNumber) => {
    if (
      pageNumber === Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    )
      return;
    let newNumber = ++pageNumber;
    this.pageChanging(newNumber);
  };

  prevPage = (pageNumber) => {
    if (pageNumber === 1) return;
    let newNumber = --pageNumber;
    this.pageChanging(newNumber);
  };

  lastPage = () => {
    const newNumber = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    if (this.props.currentPage === newNumber) return;
    this.pageChanging(newNumber);
  };

  firstPage = () => {
    const newNumber = 1;
    if (this.props.currentPage === newNumber) return;
    this.pageChanging(newNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          firstPage={this.firstPage}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
          lastPage={this.lastPage}
          users={this.props.users}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setFollowingProgress={this.props.setFollowingProgress}
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

export default connect(mapStateToProps /*mapDispatchToProps*/, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setIsFetching,
  setFollowingProgress,
})(UsersContainer);
