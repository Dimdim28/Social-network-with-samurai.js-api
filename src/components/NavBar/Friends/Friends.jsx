import React, { useEffect } from "react";
import { Friend } from "./Friend";
import s from "./Friends.module.css";

export const Friends = (props) => {
  const { users, getLastUsers } = props;
  const [first, second, third] = users.map((user) => user.name);
  useEffect(() => {
    getLastUsers();
  }, [first, second, third, getLastUsers]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Last registered users</h1>
      <div className={s.friends}>
        {props.users.map((friend) => (
          <Friend name={friend.name} key={friend.key} />
        ))}
      </div>
    </div>
  );
};
