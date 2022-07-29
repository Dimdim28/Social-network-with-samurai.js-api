import React from "react";
import s from "./Post.module.css";
export const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://w7.pngwing.com/pngs/211/382/png-transparent-silhouette-avatar-avatar-silhouettes-animals-public-relations-monochrome-thumbnail.png"
        alt="logo"
      ></img>
      <p>{props.message}</p>
      <div>
        <span>{props.likes}</span>
        <span>Like</span>
      </div>
    </div>
  );
};
