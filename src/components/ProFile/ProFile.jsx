import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProFileInfo } from "./ProFileInfo/ProFileInfo";
import s from "./ProFile.module.css";

export default function ProFile(props) {
  return (
    <div className={s.profile}>
      <ProFileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
}
