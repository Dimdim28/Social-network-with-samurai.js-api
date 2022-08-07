import { connect } from "react-redux";
import React from "react";
import {
  follow,
  setCurrentPage,
  unfollow,
  getUsers,
} from "../../redux/users-reducer";

import { Users } from "./Users";
import Preloader from "../common/Preloader/Preloader";

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
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

export default connect(mapStateToProps /*mapDispatchToProps*/, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
})(UsersContainer);
