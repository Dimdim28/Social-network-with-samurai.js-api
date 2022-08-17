import React from "react";
import AddTextForm from "../../common/Forms/AddTextForm";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  return (
    <div className={s.postsArea}>
      <div className={s.posts}>
        {props.postsData.map((el) => (
          <Post message={el.message} key={el.id} likes={el.likes} />
        ))}
      </div>

      {/* <div className={s.addPost}>
        <textarea
          className={s.inputDescr}
          ref={newPostElement}
          value={props.newPostText}
          onChange={onChangePost}
        />
        <button className={s.addButton} onClick={onAddPost}>
          Add post
        </button>
      </div> */}
      <AddTextForm submit={props.addPost} buttonLabel="Add Post" />
    </div>
  );
};
