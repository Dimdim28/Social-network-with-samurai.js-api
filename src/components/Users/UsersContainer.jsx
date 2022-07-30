import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersTotalCountActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";

import { Users } from "./Users";

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

class UsersAPIComponent extends React.Component {
  pageChanging = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
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
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
