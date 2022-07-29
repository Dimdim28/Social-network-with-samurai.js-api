import React from "react";
import s from "../Friends.module.css";

export const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img alt="avatar" src={props.avatar} className={s.avatar} />
      {props.name}
    </div>
  );
};
