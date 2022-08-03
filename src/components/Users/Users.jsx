import React from "react";
import s from "./Users.module.css";
import user from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { folowingAPI } from "../../api/api";

export const Users = (props) => {
  //   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //   let pages = [];
  //   for (let i = 1; i <= pagesCount; i++) {     //used for displaying all pagenumbers (you may filter them if you want)
  //     pages.push(i); // in returned jsx use pages.map (index) => {...}
  //   }

  return (
    <>
      <div className={s.line}>
        <span onClick={() => props.firstPage()}>{"<<"}</span>
        <span onClick={() => props.prevPage(props.currentPage)}>{"<--"}</span>
        <span>{props.currentPage}</span>
        <span onClick={() => props.nextPage(props.currentPage)}>{"-->"}</span>
        <span onClick={() => props.lastPage()}>{">>"}</span>
      </div>
      <div className={s.users}>
        {props.users.map((el) => {
          return (
            <div className={s.user} key={el.id}>
              <div className={s.main}>
                <NavLink to={"/profile/" + el.id}>
                  <img
                    className={s.image}
                    alt="avatar"
                    src={el.photos.small ? el.photos.small : user}
                  />
                </NavLink>
                <button
                  className={`${s.button} ${
                    el.followed ? s.unfollow : s.follow
                  }`}
                  onClick={
                    el.followed
                      ? () => {
                          folowingAPI.unfollow(el.id).then((res) => {
                            if (res.data.resultCode === 0) {
                              props.unfollow(el.id);
                            }
                          });
                        }
                      : () => {
                          folowingAPI.follow(el.id).then((res) => {
                            if (res.data.resultCode === 0) {
                              props.follow(el.id);
                            }
                          });
                        }
                  }
                >
                  {el.followed ? "Unfollow" : "Follow"}
                </button>
              </div>

              <div className={s.info}>
                <div className={s.row}>
                  <p className={s.name}>{el.name}</p>
                </div>

                <div>
                  <p className={s.status}>{el.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
