import React from "react";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const onAddPost = () => {
    props.addPost();
  };

  const onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsArea}>
      <div className={s.addPost}>
        <textarea
          className={s.inputDescr}
          ref={newPostElement}
          value={props.newPostText}
          onChange={onChangePost}
        />
        <button className={s.addButton} onClick={onAddPost}>
          Add post
        </button>
      </div>

      <div className={s.posts}>
        {props.postsData.map((el) => (
          <Post message={el.message} key={el.id} likes={el.likes} />
        ))}
      </div>
    </div>
  );
};
