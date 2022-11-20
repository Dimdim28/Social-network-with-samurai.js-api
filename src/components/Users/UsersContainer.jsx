import { connect } from "react-redux";
import React, { useEffect } from "react";
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

const UserContainer = (props) => {
  const { currentPage, pageSize, getUsers } = props;

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [currentPage, pageSize, getUsers]);

  const pageChanging = (pageNumber) => {
    props.getUsers(pageNumber, props.pageSize);
    props.setCurrentPage(pageNumber);
  };

  const nextPage = (pageNumber) => {
    if (pageNumber === Math.ceil(props.totalUsersCount / props.pageSize))
      return;
    let newNumber = ++pageNumber;
    pageChanging(newNumber);
  };

  const prevPage = (pageNumber) => {
    if (pageNumber === 1) return;
    let newNumber = --pageNumber;
    pageChanging(newNumber);
  };

  const lastPage = () => {
    const newNumber = Math.ceil(props.totalUsersCount / props.pageSize);

    if (props.currentPage === newNumber) return;
    pageChanging(newNumber);
  };

  const firstPage = () => {
    const newNumber = 1;
    if (props.currentPage === newNumber) return;
    pageChanging(newNumber);
  };

  if (props.isFetching) return <Preloader />;
  return (
    <>
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        firstPage={firstPage}
        prevPage={prevPage}
        nextPage={nextPage}
        lastPage={lastPage}
        users={props.users}
        currentPage={props.currentPage}
        follow={props.follow}
        unfollow={props.unfollow}
        followingProgress={props.followingProgress}
      />
    </>
  );
};

export default compose(
  connect(mapStateToProps /*mapDispatchToProps*/, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  }),
  WithAuthRedirect
)(UserContainer);
