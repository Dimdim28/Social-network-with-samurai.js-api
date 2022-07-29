import React from "react";
import { Friend } from "./Friend";
import s from "./Friends.module.css";

export const Friends = (props) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Friends</h1>
      <div className={s.friends}>
        {props.state.sidebarReducer.friends.map((friend) => (
          <Friend avatar={friend.image} name={friend.name} key={friend.key} />
        ))}
      </div>
    </div>
  );
};
