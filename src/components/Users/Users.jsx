import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import user from "../../assets/images/avatar.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: Math.ceil(this.props.totalUsersCount / this.props.pageSize),
    };
  }
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
    if (pageNumber === this.state.pageCount) return;
    let newNumber = ++pageNumber;
    this.pageChanging(newNumber);
  };

  prevPage = (pageNumber) => {
    if (pageNumber === 1) return;
    let newNumber = --pageNumber;
    this.pageChanging(newNumber);
  };

  lastPage = () => {
    const newNumber = this.state.pageCount;
    if (this.props.currentPage === newNumber) return;
    this.pageChanging(newNumber);
  };

  firstPage = () => {
    const newNumber = 1;
    if (this.props.currentPage === newNumber) return;
    this.pageChanging(newNumber);
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <>
        <div className={s.line}>
          <span onClick={() => this.firstPage()}>{"<<"}</span>
          <span onClick={() => this.prevPage(this.props.currentPage)}>
            {"<--"}
          </span>
          <span>{this.props.currentPage}</span>
          <span onClick={() => this.nextPage(this.props.currentPage)}>
            {"-->"}
          </span>
          <span onClick={() => this.lastPage()}>{">>"}</span>
        </div>
        {this.props.users.map((el) => {
          return (
            <div className={s.user} key={el.id}>
              <div className={s.main}>
                <img
                  className={s.image}
                  alt="avatar"
                  src={el.photos.small ? el.photos.small : user}
                />
                <button
                  className={`${s.button} ${
                    el.followed ? s.unfollow : s.follow
                  }`}
                  onClick={
                    el.followed
                      ? () => this.props.unfollow(el.id)
                      : () => this.props.follow(el.id)
                  }
                >
                  {el.followed ? "Unfollow" : "Follow"}
                </button>
              </div>

              <div className={s.info}>
                <div className={s.row}>
                  <p className={s.name}>{el.name}</p>
                  <p className={s.location}>
                    {`el.location.city +  + el.location.country`}
                  </p>
                </div>

                <div>
                  <p className={s.status}>{el.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Users;
