import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProFileInfo } from "./ProFileInfo/ProFileInfo";

export default function ProFile() {
  return (
    <div>
      <ProFileInfo />
      <MyPostsContainer />
    </div>
  );
}
