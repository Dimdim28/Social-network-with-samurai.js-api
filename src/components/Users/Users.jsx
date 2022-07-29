import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import user from "../../assets/images/avatar.png";

class Users extends React.Component {
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

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    let pagesCount = Math.round(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <>
        <div className={s.line}>
          {pages.map((ind) => (
            <span
              className={this.props.currentPage === ind && s.choosed}
              onClick={() => this.onPageChanged(ind)}
            >
              {ind}
            </span>
          ))}
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
