import React from "react";
import s from "./Users.module.css";
import user from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";

export const Users = (props) => {
  return (
    <>
      <div className={s.line}>
        <div onClick={() => props.firstPage()}>
          <span>{"<<"}</span>
        </div>
        <div onClick={() => props.prevPage(props.currentPage)}>
          <span> {"<--"}</span>
        </div>
        <div>
          <span>{props.currentPage}</span>
        </div>
        <div onClick={() => props.nextPage(props.currentPage)}>
          <span>{"-->"}</span>
        </div>
        <div onClick={() => props.lastPage()}>
          <span>{">>"}</span>
        </div>
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

                {el.followed ? (
                  <button
                    className={`${s.button} ${s.unfollow}`}
                    disabled={props.followingProgress.some(
                      (id) => id === el.id
                    )}
                    onClick={() => {
                      props.unfollow(el.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={`${s.button} ${s.follow}`}
                    disabled={props.followingProgress.some(
                      (id) => id === el.id
                    )}
                    onClick={() => {
                      props.follow(el.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>

              <div className={s.info}>
                <p className={s.name}>{el.name}</p>
                <p className={s.status}>{el.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
