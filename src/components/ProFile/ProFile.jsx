import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProFileInfo } from "./ProFileInfo/ProFileInfo";

export default function ProFile(props) {
  return (
    <div>
      <ProFileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}
