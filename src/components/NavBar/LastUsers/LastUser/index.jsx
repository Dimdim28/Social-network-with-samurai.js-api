import React from "react";
import s from "../LastUsers.module.css";

export const User = (props) => {
  return <div className={s.friend}>{props.name}</div>;
};
