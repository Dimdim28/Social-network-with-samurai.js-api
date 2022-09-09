import React from "react";
import s from "../Friends.module.css";

export const Friend = (props) => {
  return <div className={s.friend}>{props.name}</div>;
};
