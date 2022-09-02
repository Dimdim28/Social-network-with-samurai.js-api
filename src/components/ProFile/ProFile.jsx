import React, { useState } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProFileInfo } from "./ProFileInfo/ProFileInfo";
import s from "./ProFile.module.css";

export default function ProFile(props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={s.profile}>
      <ProFileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        savePhotoError={props.savePhotoError}
        editMode={editMode}
        setEditMode={setEditMode}
        saveProfile={props.saveProfile}
        saveProfileError={props.saveProfileError}
        userId={props.userId}
      />
      {!editMode && <MyPostsContainer isOwner={props.isOwner} />}
    </div>
  );
}
