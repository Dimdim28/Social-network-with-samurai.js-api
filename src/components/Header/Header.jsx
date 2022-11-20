import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function Header(props) {
  let resultName = "";
  const loginName = props.login;
  if (props.isAuth)
    resultName =
      loginName.length < 8
        ? loginName
        : loginName.slice(0, 4) + "..." + loginName.slice(-4);
  return (
    <header className={s.header}>
      <NavLink to={"/"} className={s.help}>
        <span>Help</span>
      </NavLink>
      {props.isAuth ? (
        <div className={s.name}>
          <span className={s.login}>{resultName}</span>
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
