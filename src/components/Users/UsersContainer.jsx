import { connect } from "react-redux";
import React from "react";
import {
  follow,
  setCurrentPage,
  unfollow,
  getUsers,
} from "../../redux/users/users-reducer";

import { Users } from "./Users";
import Preloader from "../common/Preloader/Preloader";
import WithAuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";
import { usersSelectors } from "../../redux/users/users-selectors";

const mapStateToProps = (state) => {
  return {
    users: usersSelectors.getUsers(state),
    pageSize: usersSelectors.getPageSize(state),
    totalUsersCount: usersSelectors.getTotalUsersCount(state),
    currentPage: usersSelectors.getCurrentPage(state),
    isFetching: usersSelectors.getIsFetching(state),
    followingProgress: usersSelectors.getFollowingProgress(state),
  };
};

class UsersContainer extends React.Component {
  pageChanging = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

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
    if (this.props.isFetching) return <Preloader />;
    return (
      <>
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

export default compose(
  connect(mapStateToProps /*mapDispatchToProps*/, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  }),
  WithAuthRedirect
)(UsersContainer);
