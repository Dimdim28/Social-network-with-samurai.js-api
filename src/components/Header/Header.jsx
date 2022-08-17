import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3W1zE81I1-NXhjPfk0uLNt5bkbdJ9VV1rKeJGexXl2dmAHSBcWEa-t4OxwvdDBvpTU9g&usqp=CAU"
        alt="logo"
      />
      {props.isAuth ? (
        <div className={s.name}>
          <span className={s.login}>{props.login}</span>
          <span className={s.exit} onClick={props.exit}>
            exit
          </span>
        </div>
      ) : (
        <div className={s.loginBlock}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}
    </header>
  );
}
