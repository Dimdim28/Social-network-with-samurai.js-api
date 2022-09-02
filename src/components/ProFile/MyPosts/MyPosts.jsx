import React from "react";
import AddTextForm from "../../common/Forms/AddTextForm";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  const submit = (data, form) => {
    props.addPost(data);
    form.restart();
  };

  return (
    <div className={s.postsArea}>
      <div className={s.posts}>
        {props.postsData.map((el) => (
          <Post message={el.message} key={el.id} likes={el.likes} />
        ))}
      </div>

      {props.isOwner && <AddTextForm submit={submit} buttonLabel="Add Post" />}
    </div>
  );
};
